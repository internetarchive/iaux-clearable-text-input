import { html, fixture, expect } from '@open-wc/testing';

import type { ClearableTextInput } from '../src/clearable-text-input';
import '../src/clearable-text-input';

describe('Clearable text input', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<ClearableTextInput>(
      html`<clearable-text-input></clearable-text-input>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
