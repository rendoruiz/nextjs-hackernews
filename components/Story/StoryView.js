import Head from 'next/head';

import SiteLayout from "../SiteLayout";
import StoryNavigationBar from "./StoryNavigationBar";
import StoryList from "./StoryList";

const StoryView = ({ useHook }) => {
  return ( 
    <>
      <Head>
        <title>Hacker News - A front page of the internet</title>
        <meta name="description" content="Hacker News is a community where people can discuss their interests, hobbies and passions. There's a post for whatever you're interested in on Hacker News." />
        <meta property="og:title" content="Hacker News - A front page of the internet" />
        <meta property="og:description" content="Hacker News is a community where people can discuss their interests, hobbies and passions. There's a post for whatever you're interested in on Hacker News." />
      </Head>

      <SiteLayout contentClassName="grid-rows-[auto,1fr,auto]">
        {/* Navbar */}
        <StoryNavigationBar />

        {/* Stories */}
        <StoryList useHook={useHook} />
      </SiteLayout>
    </>
  );
}

export default StoryView;