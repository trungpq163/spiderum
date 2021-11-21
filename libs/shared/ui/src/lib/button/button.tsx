/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from './button.styles';
import { Loading } from '@nextui-org/react';

export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, className, loading = false, ...restProps } = props;
  return (
    <Container
      loading={loading ? 'true' : ''}
      className={className}
      {...(restProps as any)}
    >
      {loading ? <Loading type="default" color="white" size={24} /> : children}
    </Container>
  );
};

export default Button;
