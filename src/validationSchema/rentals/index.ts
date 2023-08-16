import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  total_price: yup.number().integer().nullable(),
  tool_id: yup.string().nullable(),
  guest_id: yup.string().nullable(),
});
