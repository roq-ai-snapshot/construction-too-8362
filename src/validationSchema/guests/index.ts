import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  phone_number: yup.string().nullable(),
  address: yup.string().nullable(),
  email: yup.string().nullable(),
  user_id: yup.string().nullable(),
  rental_id: yup.string().nullable(),
});
