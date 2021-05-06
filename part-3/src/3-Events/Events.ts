/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('x-events')
export class EventsParent extends LitElement {
  @state() inputvalue = '';

  onKeyup(e: Event) {
    const inputEl = e.target as HTMLInputElement;
    this.inputvalue = inputEl.value;
  }

  render() {
    return html`
      <label for="input">Enter a value:</label>
      <input name="input" type="text" @keyup=${this.onKeyup} />

      <events-child .message=${this.inputvalue}></events-child>
    `;
  }
}

@customElement('events-child')
export class EventsChild extends LitElement {
  @property({ type: String }) message: string = '';

  render() {
    return html` <p>Live typing value: "${this.message}"</p> `;
  }
}
