import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  availability: yup.boolean().nullable(),
  price_per_day: yup.number().integer().nullable(),
  company_id: yup.string().nullable(),
});
