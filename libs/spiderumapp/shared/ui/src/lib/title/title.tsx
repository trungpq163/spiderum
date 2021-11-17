import { Container } from './title.styles';
/* eslint-disable-next-line */
export interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Title(props: ITitleProps) {
  const { children, className = '' } = props;
  return <Container className={className}>{children}</Container>;
}

export default Title;
