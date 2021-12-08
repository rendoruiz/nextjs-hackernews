import axios from "axios";
import { useQuery } from "react-query";

// story data
const fetchStory = async (storyId) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
  return response.data;
}

// only refetch within 15min intervals on comment view
const useStory = (storyId, autoRefetchOnFocus = true) => {
  return useQuery(['story.'+storyId, storyId], () => fetchStory(storyId), {
    staleTime: autoRefetchOnFocus ? 0 : 900000,
    refetchOnWindowFocus: autoRefetchOnFocus,
  });
}

export { useStory, fetchStory }