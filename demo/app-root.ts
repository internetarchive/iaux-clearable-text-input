import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/clearable-text-input';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <clearable-text-input
        .placeholder=${'Search...'}
        .screenReaderLabel=${'Search'}
        @clear=${this.onClear}
      >
      </clearable-text-input>
    `;
  }

  private onClear(e: CustomEvent<string>) {
    // Do something with the value prior to clearing
    console.log(`Value before clear was ${e.detail}`);
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
