import axios from 'axios';
import queryString from 'query-string';
import {
  TrainerSpecializationInterface,
  TrainerSpecializationGetQueryInterface,
} from 'interfaces/trainer-specialization';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrainerSpecializations = async (
  query?: TrainerSpecializationGetQueryInterface,
): Promise<PaginatedInterface<TrainerSpecializationInterface>> => {
  const response = await axios.get('/api/trainer-specializations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTrainerSpecialization = async (trainerSpecialization: TrainerSpecializationInterface) => {
  const response = await axios.post('/api/trainer-specializations', trainerSpecialization);
  return response.data;
};

export const updateTrainerSpecializationById = async (
  id: string,
  trainerSpecialization: TrainerSpecializationInterface,
) => {
  const response = await axios.put(`/api/trainer-specializations/${id}`, trainerSpecialization);
  return response.data;
};

export const getTrainerSpecializationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/trainer-specializations/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteTrainerSpecializationById = async (id: string) => {
  const response = await axios.delete(`/api/trainer-specializations/${id}`);
  return response.data;
};
