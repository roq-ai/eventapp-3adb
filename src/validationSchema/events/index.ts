import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  organizer_id: yup.string().nullable().required(),
  participation_rewards: yup.string().nullable(),
});
