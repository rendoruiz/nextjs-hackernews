import StoryList from "../components/Story/StoryList";

const HomeIndexView = () => {
  return ( 
    <StoryList
      api="https://hacker-news.firebaseio.com/v0/topstories.json"
      routeName="top"
    />
  );
}
 
export default HomeIndexView;