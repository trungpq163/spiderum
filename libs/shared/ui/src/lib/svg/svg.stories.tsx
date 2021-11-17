import { Story, Meta } from '@storybook/react';
import { Svg, SvgProps } from './svg';

export default {
  component: Svg,
  title: 'Svg',
} as Meta;

const Template: Story<SvgProps> = (args) => <Svg {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
