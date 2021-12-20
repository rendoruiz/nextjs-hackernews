import axios from "axios";
import { useQuery } from "react-query";

// story data
const fetchComment = async (commentId) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);
  return response.data;
}
const useComment = (commentId) => {
  return useQuery(['content.'+commentId, commentId], () => fetchComment(commentId), {
    staleTime: 300000,
    refetchOnWindowFocus: false,
  });
}

export { useComment, fetchComment }