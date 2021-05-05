import { html, css, LitElement, property, customElement } from 'lit-element';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: forestgreen;
    }
  `;

  @property({ type: String }) title = 'Hello World!';

  render() {
    return html` <h2>${this.title}</h2> `;
  }
}
