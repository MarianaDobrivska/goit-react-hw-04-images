import { Formik, Field } from 'formik';
import {
  StyledSearchbarHeader,
  StyledSearchbarForm,
  StyledButton,
  StyledLabel,
  Input,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbarHeader>
      <Formik
        initialValues={{ query: ' ' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.query.trim());
          resetForm();
        }}
      >
        <StyledSearchbarForm>
          <StyledButton type="submit">
            <StyledLabel>Search</StyledLabel>
          </StyledButton>

          <Field
            as={Input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </StyledSearchbarForm>
      </Formik>
    </StyledSearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
