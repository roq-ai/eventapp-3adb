import axios from 'axios';
import queryString from 'query-string';
import { EventLocationInterface, EventLocationGetQueryInterface } from 'interfaces/event-location';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEventLocations = async (
  query?: EventLocationGetQueryInterface,
): Promise<PaginatedInterface<EventLocationInterface>> => {
  const response = await axios.get('/api/event-locations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEventLocation = async (eventLocation: EventLocationInterface) => {
  const response = await axios.post('/api/event-locations', eventLocation);
  return response.data;
};

export const updateEventLocationById = async (id: string, eventLocation: EventLocationInterface) => {
  const response = await axios.put(`/api/event-locations/${id}`, eventLocation);
  return response.data;
};

export const getEventLocationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/event-locations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEventLocationById = async (id: string) => {
  const response = await axios.delete(`/api/event-locations/${id}`);
  return response.data;
};
