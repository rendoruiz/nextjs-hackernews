import axios from "axios";
import { useQuery } from "react-query";

// top story ids
const fetchTopStoryIds = async () => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  return response.data;
}
const useTopStoryIds = () => {
  return useQuery('storyids.top', fetchTopStoryIds);
}

// best story ids
const fetchBestStoryIds = async () => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json');
  return response.data;
}
const useBestStoryIds = () => {
  return useQuery('storyids.best', fetchBestStoryIds);
}

// new story ids
const fetchNewStoryIds = async () => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');
  return response.data;
}
const useNewStoryIds = () => {
  return useQuery('storyids.new', fetchNewStoryIds);
}

export { useTopStoryIds, fetchTopStoryIds, useBestStoryIds, fetchBestStoryIds, useNewStoryIds, fetchNewStoryIds }