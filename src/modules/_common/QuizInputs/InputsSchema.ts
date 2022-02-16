import * as Yup from 'yup';

const currentYear = new Date().getFullYear();

const InputsSchema = Yup.object().shape({
  month: Yup.number()
    .required('Month is required')
    .typeError('Must be only digits')
    .min(1, 'Min month 01')
    .max(12, 'Max month 12'),
  year: Yup.number()
    .required('Year is required')
    .typeError('Must be only digits')
    .min(1900, 'Min year 1990')
    .max(currentYear, `Max year ${currentYear}`),
});

export default InputsSchema;
