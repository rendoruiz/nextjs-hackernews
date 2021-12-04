import axios from "axios";
import { useQuery } from "react-query";

// story data
const fetchStory = async (storyId) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
  return response.data;
}
const useStory = (storyId) => {
  return useQuery([storyId, storyId], () => fetchStory(storyId));
}

export { useStory, fetchStory }

