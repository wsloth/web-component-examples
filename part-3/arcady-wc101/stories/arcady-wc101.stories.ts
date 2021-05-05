import { html, TemplateResult } from 'lit-html';
import '../src/arcady-wc101.js';

export default {
  title: 'ArcadyWc101',
  component: 'arcady-wc101',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <arcady-wc101 style="--arcady-wc101-background-color: ${backgroundColor}" .title=${title}></arcady-wc101>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
