import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  event_id: yup.string().nullable().required(),
});
