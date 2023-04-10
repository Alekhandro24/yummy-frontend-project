import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { theme } from 'styles/theme';

export const FormStyled = styled(Form)`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const FieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 12px;
`;
export const FieldStyled = styled(Field)`
  padding: 14px 12px;
  height: 45px;
  border-radius: ${theme.radii.light};
  font-size: ${theme.fontSizes.xm};
  color: ${theme.colors.whiteTextColor};
  background-color: transparent;
  border: 1px solid;
  border-color: ${props => props.color || 'black'};
`;

export const ButtonStyled = styled.button`
  background-color: ${theme.colors.greenBgColor};
  height: ${p => p.theme.spacing(22)};
  border-radius: ${theme.radii.light};
`;
export const ButtonTemp = styled(ButtonStyled)`
  margin-top: 25px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${theme.colors.whiteTextColor};
  /* margin-bottom: 40px; */
`;
export const ErrorMessageStyled = styled(ErrorMessage)`
  /* position: absolute; */
  font-size: ${theme.fontSizes.s};
  color: ${props => props.color || props.theme.colors.whiteTextColor};
  /* color: white; */
  margin-top: 8px;
`;

export const FormBoxStyled = styled.div`
  width: 335px;
  padding: 32px 28px 40px 28px;
  background-color: ${theme.colors.lightDarckBgColor};
  border-radius: 30px;
  @media screen and ${p => p.theme.media.medium} {
    padding: 44px 50px;
  }
`;