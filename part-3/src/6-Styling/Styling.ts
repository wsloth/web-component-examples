/**
 * Example of a form where the submit event is caught,
 * the data is automatically parsed to an Object and then
 * sent to an API endpoint.
 */
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { fontHeadingMixin } from './fonts.js';
import { primary } from './colors.js';

@customElement('x-styling')
export class FormsComponent extends LitElement {
  static styles = css`
    span {
      ${fontHeadingMixin()};
      color: ${primary};
      margin: 3em;
    }
  `;

  render() {
    return html` <span>Hello</span> `;
  }
}
