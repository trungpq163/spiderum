import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from './select';

export default {
  component: Select,
  title: 'Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
