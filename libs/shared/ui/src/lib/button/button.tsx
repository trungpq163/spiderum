/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from './button.styles';

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
      {loading ? <div>Loading......</div> : children}
    </Container>
  );
};

export default Button;
