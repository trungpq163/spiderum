/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRootState } from '@spiderum/shared/data-access/redux';
import { Button, InputBox as Input } from '@spiderum/shared/ui';
import { FormikProps } from 'formik';
import { useSelector } from 'react-redux';
import { Form, Container } from './ui-form.styles';

interface ILoginFormProps {
  formik: FormikProps<any>;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { formik } = props;
  const { loading } = useSelector((state: IRootState) => state.auth);
  return (
    <Container>
      <Form>
        <Input
          label="Email"
          type="text"
          required
          {...formik.getFieldProps('email')}
          {...formik.getFieldMeta('email')}
        />

        <Input
          label="Password"
          required
          type="password"
          {...formik.getFieldProps('password')}
          {...formik.getFieldMeta('password')}
        />

        <Button
          className="w-full text-white bg-dark-blue"
          type="submit"
          loading={loading}
        >
          Đăng nhập ngay
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
