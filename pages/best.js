import StoryList from "../components/Story/StoryList";

const HomeBestView = () => {
  return ( 
    <StoryList
      api="https://hacker-news.firebaseio.com/v0/topstories.json"
      routeName="best"
    />
  );
}
 
export default HomeBestView;