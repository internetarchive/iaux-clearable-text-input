import { html, fixture, expect } from '@open-wc/testing';

import type { IaClearableTextInput } from '../src/ia-clearable-text-input';
import '../src/ia-clearable-text-input';

let clearableTextInput: IaClearableTextInput;
let inputField: HTMLInputElement;
let clearButton: HTMLButtonElement;

describe('Clearable text input', () => {
  it('has a clear button, initially hidden', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;
    expect(clearButton).to.exist;
    expect(clearButton?.hidden).to.equal(true);
  });

  it('shows the clear button when the input field has initial text', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input .value=${'a'}></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;
    expect(clearButton?.hidden).to.equal(false);
  });

  it('shows the clear button when text is entered into the input field', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    inputField = clearableTextInput.shadowRoot?.querySelector(
      '#text-input'
    ) as HTMLInputElement;

    inputField.value = 'a';
    // Setting the input's value programmatically doesn't fire an input event.
    // So to simulate real user input, we need to fire the event as well.
    inputField.dispatchEvent(new Event('input'));

    await clearableTextInput.updateComplete;

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;
    expect(clearButton?.hidden).to.equal(false);
  });

  it('clears the text field when the clear button is clicked', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input .value=${'a'}></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    expect(clearableTextInput.value).to.equal('a');
    expect(clearButton?.hidden).to.equal(false);

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;
    clearButton.click();
    await clearableTextInput.updateComplete;

    expect(clearableTextInput.value).to.equal('');
    expect(clearButton?.hidden).to.equal(true);
  });

  it('focuses the text field upon clearing', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input .value=${'a'}></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    inputField = clearableTextInput.shadowRoot?.querySelector(
      '#text-input'
    ) as HTMLInputElement;

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;
    clearButton.click();
    await clearableTextInput.updateComplete;

    expect(clearableTextInput.shadowRoot?.activeElement).to.equal(inputField);
  });

  it('does not focus the text field upon clearing if focusOnClear is false', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input
        .value=${'a'}
        .focusOnClear=${false}
      ></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    inputField = clearableTextInput.shadowRoot?.querySelector(
      '#text-input'
    ) as HTMLInputElement;

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;
    clearButton.click();
    await clearableTextInput.updateComplete;

    expect(clearableTextInput.shadowRoot?.activeElement).to.not.equal(
      inputField
    );
  });

  it('accepts optional properties', async () => {
    const placeholder = 'Search...';
    const clearSRText = 'Clear search field';

    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input
        .placeholder=${placeholder}
        .clearButtonScreenReaderLabel=${clearSRText}
      ></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    inputField = clearableTextInput.shadowRoot?.querySelector(
      '#text-input'
    ) as HTMLInputElement;

    clearButton = clearableTextInput.shadowRoot?.querySelector(
      '#clear-button'
    ) as HTMLButtonElement;

    expect(clearableTextInput).to.exist;
    expect(inputField.placeholder).to.equal(placeholder);
    expect(clearButton.textContent?.trim()).to.equal(clearSRText);
  });

  it('passes the a11y audit, provided an aria-label is given', async () => {
    clearableTextInput = await fixture<IaClearableTextInput>(
      html`<ia-clearable-text-input
        .screenReaderLabel=${'Enter your first name'}
      ></ia-clearable-text-input>`
    );
    await clearableTextInput.updateComplete;

    await expect(clearableTextInput).shadowDom.to.be.accessible();
  });
});
