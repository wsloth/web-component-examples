/* eslint-disable prefer-destructuring */
/* eslint-disable wc/guard-super-call */
/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './1-HelloWorld/HelloWorld.js';
import './2-DataBinding/DataBinding.js';
import './3-Events/Events.js';
import './3-Events/Events2.js';

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
        key: 'x-helloworld',
        name: 'Hello World!',
        render: () => html`<x-helloworld></x-helloworld>`,
      },
      {
        key: 'x-databinding',
        name: 'Data Binding',
        render: () => html`<x-databinding></x-databinding>`,
      },
      {
        key: 'x-events',
        name: 'Events',
        render: () => html`<x-events></x-events>`,
      },
      {
        key: 'x-events2',
        name: 'Events 2',
        render: () => html`<x-events2></x-events2>`,
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
              ${f.name}
            </button>
          `
        )}
      </nav>

      ${this.activeFeature.render()}
    `;
  }
}
