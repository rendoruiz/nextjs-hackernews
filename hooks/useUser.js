import axios from "axios";
import { useQuery } from "react-query";

// story data
const fetchUser = async (userId) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`);
  return response.data;
}
const useUser = (userId) => {
  return useQuery(['user.'+userId, userId], () => fetchUser(userId), { staleTime: 300000 });
}

export { useUser, fetchUser }