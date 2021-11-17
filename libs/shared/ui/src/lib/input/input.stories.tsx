import { Story, Meta } from '@storybook/react';
import { InputBox } from './input';

export default {
  component: InputBox,
  title: 'InputBox',
} as Meta;

const Template: Story = (args) => <InputBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
