import { html, css, nothing, LitElement, TemplateResult } from 'lit';
import { property, query, customElement } from 'lit/decorators.js';
import clearIcon from './assets/img/close-circle-dark';

@customElement('clearable-text-input')
export class ClearableTextInput extends LitElement {
  /**
   * The value shown in the text field.
   */
  @property({ type: String }) value = '';

  /**
   * The size of the text field in (monospaced) characters.
   * Mainly exists to support existing usage, but CSS sizing should be
   * preferred (and will override this setting).
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size
   */
  @property({ type: Number }) size?: number;

  /**
   * The placeholder value shown in the text field when it is empty.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * The accessible label describing the text field.
   */
  @property({ type: String }) screenReaderLabel?: string;

  /**
   * The accessible label describing the clear button (defaults to 'Clear').
   */
  @property({ type: String }) clearButtonScreenReaderLabel = 'Clear';

  /**
   * An element id specifying additional controls for the text field for
   * screen readers.
   */
  @property({ type: String }) ariaControls?: string;

  /**
   * Whether the text field should be automatically focused when the clear
   * button is pressed.
   */
  @property({ type: Boolean }) focusOnClear = true;

  @query('#text-input')
  private textInput!: HTMLInputElement;

  protected render(): TemplateResult {
    const hideClearButton = !this.value;
    return html`
      <div id="container">
        <input
          id="text-input"
          type="text"
          size=${this.size ?? nothing}
          placeholder=${this.placeholder ?? nothing}
          .value=${this.value}
          aria-controls=${this.ariaControls ?? nothing}
          aria-label=${this.screenReaderLabel ?? nothing}
          @input=${this.onTextInput}
        />
        <button
          id="clear-button"
          type="button"
          ?hidden=${hideClearButton}
          @click=${this.clearButtonClicked}
        >
          <span class="sr-only">${this.clearButtonScreenReaderLabel}</span>
        </button>
      </div>
    `;
  }

  private onTextInput(): void {
    // Update the component value to match the input element
    this.value = this.textInput.value;
  }

  private clearButtonClicked(): void {
    // Store the value of the text field before clearing it, to send along with the clear event
    const preClearValue = this.textInput.value;

    // Empty the text field and focus it if desired
    this.value = '';
    if (this.focusOnClear) this.textInput.focus();

    // Dispatch a 'clear' event with the value the text field had prior to clearing
    const clearEvent = new CustomEvent<string>('clear', {
      detail: preClearValue,
    });
    this.dispatchEvent(clearEvent);
  }

  static styles = css`
    :host {
      --input-height: 3rem;
      --clear-button-top: 0;
      --clear-button-right: 2px;
    }

    #container {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: var(--input-height);
    }

    #text-input {
      font-size: 1.7rem;
      color: #555;
      border-radius: 2rem;
      padding: 0 1rem;
      padding-inline-end: var(--input-height);
      line-height: 1.5;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      background-image: none;
      border: 1px solid #ccc;
      width: 100%;
      height: 100%;
    }

    #text-input:focus {
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(102 175 233 / 60%);
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(102 175 233 / 60%);
    }

    #clear-button {
      position: absolute;
      inset-block-start: var(--clear-button-top);
      inset-inline-end: var(--clear-button-right);
      height: var(--input-height);
      width: var(--input-height);
      padding: 0;
      border: 0;
      background: url('${clearIcon}') center/75% no-repeat transparent;
      cursor: pointer;
    }

    /* Fallback support for older browsers without newer bidirectional rules */
    @supports not ((inset-block-start: 0) and (padding-inline-end: 0)) {
      #text-input {
        padding-right: var(--input-height);
      }

      #clear-button {
        top: var(--clear-button-top);
        right: var(--clear-button-right);
      }
    }

    .sr-only {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: -1px !important;
      padding: 0 !important;
      border: 0 !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
    }
  `;
}
