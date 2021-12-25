import axios from "axios";
import { useQuery } from "react-query";

// story data
const fetchContent = async (contentId) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${contentId}.json`);
  return response.data;
}

// only refetch within 15min intervals on comment view
const useContent = (contentId, isStatic = false) => {
  return useQuery(['content.'+contentId, contentId], () => fetchContent(contentId), {
    staleTime: isStatic ? 1800000 : 300000,
    refetchOnWindowFocus: !isStatic,
  });
}

export { useContent, fetchContent }