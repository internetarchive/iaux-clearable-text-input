import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/clearable-text-input';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html` <clearable-text-input> </clearable-text-input> `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
