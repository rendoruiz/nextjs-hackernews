import StoryList from "../components/Story/StoryList";

const HomeNewView = () => {
  return ( 
    <StoryList
      api="https://hacker-news.firebaseio.com/v0/newstories.json"
      routeName="new"
    />
  );
}
 
export default HomeNewView;