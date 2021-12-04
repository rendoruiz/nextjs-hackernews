import axios from "axios";
import { useQuery } from "react-query";

// top story ids
const fetchTopStoryIds = async () => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  return response.data;
}
const useTopStoryIds = () => {
  return useQuery('topstoryids', fetchTopStoryIds);
}

// best story ids
const fetchBestStoryIds = async () => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json');
  return response.data;
}
const useBestStoryIds = () => {
  return useQuery('beststoryids', fetchBestStoryIds);
}

// new story ids
const fetchNewStoryIds = async () => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');
  return response.data;
}
const useNewStoryIds = () => {
  return useQuery('newstoryids', fetchNewStoryIds);
}

export { useTopStoryIds, fetchTopStoryIds, useBestStoryIds, fetchBestStoryIds, useNewStoryIds, fetchNewStoryIds }