import axios from 'axios';
import queryString from 'query-string';
import { PersonalTrainerInterface, PersonalTrainerGetQueryInterface } from 'interfaces/personal-trainer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPersonalTrainers = async (
  query?: PersonalTrainerGetQueryInterface,
): Promise<PaginatedInterface<PersonalTrainerInterface>> => {
  const response = await axios.get('/api/personal-trainers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPersonalTrainer = async (personalTrainer: PersonalTrainerInterface) => {
  const response = await axios.post('/api/personal-trainers', personalTrainer);
  return response.data;
};

export const updatePersonalTrainerById = async (id: string, personalTrainer: PersonalTrainerInterface) => {
  const response = await axios.put(`/api/personal-trainers/${id}`, personalTrainer);
  return response.data;
};

export const getPersonalTrainerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/personal-trainers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePersonalTrainerById = async (id: string) => {
  const response = await axios.delete(`/api/personal-trainers/${id}`);
  return response.data;
};
