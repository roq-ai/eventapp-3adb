import * as yup from 'yup';

export const personalTrainerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  specialty: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
