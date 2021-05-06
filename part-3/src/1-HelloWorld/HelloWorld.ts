import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property({ type: String }) message = 'Hello World!';

  static styles = css`
    :host {
      font-size: calc(10px + 2vmin);
    }
  `;

  render() {
    return html`
      <main>
        <h1>${this.message}</h1>
      </main>
    `;
  }
}
