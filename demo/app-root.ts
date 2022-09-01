import { html, css, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '../src/ia-clearable-text-input';
import type { IaClearableTextInput } from '../src/ia-clearable-text-input';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state()
  private lastInputResult = '';

  @state()
  private lastClearResult = '';

  @state()
  private lastSubmitResult = '';

  @query('ia-clearable-text-input')
  private widget!: IaClearableTextInput;

  render() {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('query') ?? '';
    return html`
      <ia-clearable-text-input
        .value=${queryParam}
        .placeholder=${'Search...'}
        .screenReaderLabel=${'Search'}
        @clear=${this.onClear}
        @input=${this.onInput}
        @submit=${this.onSubmit}
      >
      </ia-clearable-text-input>
      <div id="controls">
        <label>
          <input type="checkbox" @change=${this.toggleDarkMode} />
          &nbsp;Simulate dark mode
        </label>
        <p>
          Current component value (updated upon each input event):
          <span id="input-result">${this.lastInputResult}</span>
        </p>
        <p ?hidden=${!this.lastClearResult}>
          Component value prior to the last clear event was:
          <span id="clear-result">${this.lastClearResult}</span>
        </p>
        <p ?hidden=${!this.lastSubmitResult}>
          Last submitted value was:
          <span id="submit-result">${this.lastSubmitResult}</span>
        </p>
      </div>
    `;
  }

  private onClear(e: CustomEvent<string>) {
    // Do something with the value prior to clearing
    const preClearValue = e.detail;
    this.lastClearResult = preClearValue;
  }

  private onInput() {
    this.lastInputResult = this.widget.value;
  }

  private onSubmit(e: CustomEvent<string>) {
    this.lastSubmitResult = e.detail;
  }

  private toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    this.widget.classList.toggle('dark-mode');
  }

  static styles = css`
    :host {
      display: block;
      font-size: 1.6rem;
    }

    #controls {
      margin-top: 0.8rem;
    }

    ia-clearable-text-input.dark-mode {
      --input-background-color: #2c2c2c;
      --input-color: #fff;
    }
  `;
}
