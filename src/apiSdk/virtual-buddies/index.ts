import axios from 'axios';
import queryString from 'query-string';
import { VirtualBuddyInterface, VirtualBuddyGetQueryInterface } from 'interfaces/virtual-buddy';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVirtualBuddies = async (
  query?: VirtualBuddyGetQueryInterface,
): Promise<PaginatedInterface<VirtualBuddyInterface>> => {
  const response = await axios.get('/api/virtual-buddies', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVirtualBuddy = async (virtualBuddy: VirtualBuddyInterface) => {
  const response = await axios.post('/api/virtual-buddies', virtualBuddy);
  return response.data;
};

export const updateVirtualBuddyById = async (id: string, virtualBuddy: VirtualBuddyInterface) => {
  const response = await axios.put(`/api/virtual-buddies/${id}`, virtualBuddy);
  return response.data;
};

export const getVirtualBuddyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/virtual-buddies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVirtualBuddyById = async (id: string) => {
  const response = await axios.delete(`/api/virtual-buddies/${id}`);
  return response.data;
};
