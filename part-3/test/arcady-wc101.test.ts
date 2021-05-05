import { html, fixture, expect } from '@open-wc/testing';

import { ArcadyWc101 } from '../src/ArcadyWc101.js';
import '../src/arcady-wc101.js';

describe('ArcadyWc101', () => {
  let element: ArcadyWc101;
  beforeEach(async () => {
    element = await fixture(html`<arcady-wc101></arcady-wc101>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
