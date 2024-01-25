import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get(`${process.env.RANDOM_USER_API_URL}`);
  return response.data;
};