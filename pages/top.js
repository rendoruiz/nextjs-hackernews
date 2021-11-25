import StoryList from "../components/Story/StoryList";

const HomeTopView = () => {
  return (  
    <StoryList
      api="https://hacker-news.firebaseio.com/v0/topstories.json"
      routeName="top"
    />
  );
}
 
export default HomeTopView;