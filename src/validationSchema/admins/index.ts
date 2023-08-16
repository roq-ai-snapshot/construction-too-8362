import * as yup from 'yup';

export const adminValidationSchema = yup.object().shape({
  assigned_date: yup.date().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
