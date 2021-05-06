/* eslint-disable prefer-destructuring */
/* eslint-disable wc/guard-super-call */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './1-HelloWorld/HelloWorld.js';
import './2-DataBinding/DataBinding.js';

@customElement('arcady-app')
export class ArcadyApp extends LitElement {
  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: #eee;
    }

    nav {
      margin-bottom: 50px;
    }
  `;

  @state()
  activeFeature: any;

  getFeatures() {
    return [
      {
        key: 'hello-world',
        render: () => html`<hello-world></hello-world>`,
      },
      {
        key: 'data-binding',
        render: () => html`<data-binding></data-binding>`,
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();

    this.activeFeature = this.getFeatures()[0];
  }

  switchToFeature(key: string) {
    this.activeFeature = this.getFeatures().find(f => f.key === key);
  }

  render() {
    const features = this.getFeatures();
    return html`
      <nav>
        ${features.map(
          f => html`
            <button @click=${() => this.switchToFeature(f.key)}>
              ${f.key}
            </button>
          `
        )}
      </nav>

      ${this.activeFeature.render()}
    `;
  }
}
