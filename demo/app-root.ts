import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../src/clearable-text-input';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state()
  private lastClearResult = '';

  render() {
    return html`
      <clearable-text-input
        .placeholder=${'Search...'}
        .screenReaderLabel=${'Search'}
        @clear=${this.onClear}
      >
      </clearable-text-input>
      <p ?hidden=${!this.lastClearResult}>
        Value prior to clearing was:
        <span id="clear-result">${this.lastClearResult}</span>
      </p>
    `;
  }

  private onClear(e: CustomEvent<string>) {
    // Do something with the value prior to clearing
    const preClearValue = e.detail;
    this.lastClearResult = preClearValue;
  }

  static styles = css`
    :host {
      display: block;
      font-size: 1.6rem;
    }
  `;
}
