import { Story, Meta } from '@storybook/react';
import { Link } from './link';

export default {
  component: Link,
  title: 'Link',
} as Meta;

const Template: Story = (args) => <Link {...args} routeName="test" />;

export const Primary = Template.bind({});
Primary.args = {};
