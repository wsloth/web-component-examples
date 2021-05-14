import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Route, RouterMixin } from './7-Routing/RouterMixin.js';

@customElement('arcady-app')
export class ArcadyApp extends RouterMixin(LitElement) {
  protected routes: Route[] = [
    {
      key: 'x-helloworld',
      name: 'Hello World!',
      import: () => import('./1-HelloWorld/HelloWorld.js'),
      render: () => html`<x-helloworld></x-helloworld>`,
    },
    {
      key: 'x-databinding',
      name: 'Data Binding',
      import: () => import('./2-DataBinding/DataBinding.js'),
      render: () => html`<x-databinding></x-databinding>`,
    },
    {
      key: 'x-events',
      name: 'Events',
      import: () => import('./3-Events/Events.js'),
      render: () => html`<x-events></x-events>`,
    },
    {
      key: 'x-events2',
      name: 'Events 2',
      import: () => import('./3-Events/Events2.js'),
      render: () => html`<x-events2></x-events2>`,
    },
    {
      key: 'x-forms',
      name: 'Forms',
      import: () => import('./4-Forms/Forms.js'),
      render: () => html`<x-forms></x-forms>`,
    },
    {
      key: 'x-lifecycle',
      name: 'Lifecycle',
      import: () => import('./5-Lifecycle/Lifecycle.js'),
      render: () => html`<x-lifecycle></x-lifecycle>`,
    },
    {
      key: 'x-styling',
      name: 'Styling',
      import: () => import('./6-Styling/Styling.js'),
      render: () => html`<x-styling></x-styling>`,
    },
  ];

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

    nav > button {
      margin-top: 25px;
      padding: 15px;
      font-family: 'Helvetica Neue', sans-serif;
      font-size: 20px;
      border-radius: 5px;
    }
  `;

  render() {
    return html`
      <nav>
        ${this.routes.map(
          (route: Route) => html`
            <button @click=${() => this.navigateTo(route.key)}>
              ${route.name}
            </button>
          `
        )}
      </nav>

      ${this.renderRoute()}
    `;
  }
}
