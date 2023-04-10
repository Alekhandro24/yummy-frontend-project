import { ErrorMessage, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';
import {
  FormStyled,
  FieldStyled,
  ButtonStyled,
  ErrorMessageStyled,
  Title,
  FieldWrapperStyled,
  FormBoxStyled,
} from './RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/authColors';

const registerSchema = object({
  name: string().required(),
  email: string().required().email(),
  password: string().min(6).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useAuth();
  const { errorMessage } = useAuth();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <>
      {isLoading && <p>component loading</p>}
      <FormBoxStyled>
        <Formik
          validationSchema={registerSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ errors, values }) => (
            <FormStyled autoComplete="off">
              <Title>Registration</Title>
              <FieldWrapperStyled>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Name"
                  color={getColor(errors.name, values.name)}
                />

                <ErrorMessageStyled
                  name="name"
                  component="span"
                  color={getColor(errors.name, values.name)}
                />
              </FieldWrapperStyled>
              <FieldWrapperStyled>
                <FieldStyled
                  name="email"
                  type="email"
                  placeholder="Email"
                  color={getColor(errors.email, values.email)}
                />
                <ErrorMessageStyled
                  name="email"
                  component="span"
                  color={getColor(errors.email, values.email)}
                />
              </FieldWrapperStyled>
              <FieldWrapperStyled>
                <FieldStyled
                  name="password"
                  type="password"
                  placeholder="Password"
                  color={getColor(errors.password, values.password)}
                />
                <ErrorMessageStyled
                  component="span"
                  name="password"
                  color={getColor(errors.password, values.password)}
                ></ErrorMessageStyled>
              </FieldWrapperStyled>
              {errorMessage && (
                <p style={{ color: '#E74A3B' }}>${errorMessage}</p>
              )}
              <ButtonStyled type="submit">Submit</ButtonStyled>
            </FormStyled>
          )}
        </Formik>
        <Link to="/signin">Sign in</Link>
      </FormBoxStyled>
    </>
  );
};