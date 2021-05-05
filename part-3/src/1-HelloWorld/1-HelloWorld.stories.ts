import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { ArgTypes, Story } from '../storybook-utils';
import './1-HelloWorld';

export default {
  title: '1 - Hello World',
  component: 'hello-world',
  argTypes: {
    title: { control: 'text' },
  },
};

const Template: Story<ArgTypes> = ({ title = undefined }: ArgTypes) => html`
  <hello-world title=${ifDefined(title)}></hello-world>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Custom Title',
};
