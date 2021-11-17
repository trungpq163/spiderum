/* eslint-disable @typescript-eslint/no-empty-interface */
import { Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { handleLogin, IRootState } from '@spiderum/shared/data-access/redux';
import { useSelector, useDispatch } from 'react-redux';
import redirect from 'nextjs-redirect';
import { ROUTE } from '@spiderum/shared/util/route';

import Form from '../ui-form/ui-form';
import {
  Container,
  SubTitle,
  Title,
  TitleWrapper,
  Wrapper,
} from './feature-main.styles';

interface IFeatureMainProps {}

export interface IInitialValues {
  email: string;
  password: string;
}

export const FeatureMain: React.FC<IFeatureMainProps> = (props) => {
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector(
    (state: IRootState) => state.auth
  );

  console.log('loading', loading);

  const Redirect = redirect(ROUTE.HOME);

  if (currentUser) {
    return <Redirect children=" " />;
  }

  const initialValues: IInitialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Vui lòng nhập email')
      .email('Vui lòng nhập đúng định dạng email'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  const handleSubmit = (values: IInitialValues) => {
    const { email, password } = values;
    dispatch(handleLogin(email, password));
  };

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <SubTitle>Hi there ^^</SubTitle>
          <Title>Đăng nhập vào spiderum</Title>
        </TitleWrapper>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(formik: FormikProps<IInitialValues>) => <Form formik={formik} />}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default FeatureMain;
