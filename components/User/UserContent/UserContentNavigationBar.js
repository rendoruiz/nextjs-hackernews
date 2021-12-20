import NavigationBar from "../../Shared/NavigationBar";
import FireGlyph from "../../Glyphs/FireGlyph";
import LightningGlyph from "../../Glyphs/LightningGlyph";
import TrendUpGlyph from "../../Glyphs/TrendUpGlyph";

const navigationItems = [
  {
    text: 'Overview',
    glyph: <FireGlyph className="w-full h-full" />,
  },
  {
    route: '/stories',
    text: 'Stories',
    glyph: <LightningGlyph className="w-full h-full" />,
  },
  {
    route: '/comments',
    text: 'Comments',
    glyph: <TrendUpGlyph className="w-full h-full" />,
  },
];

const UserContentNavigationBar = ({ userId }) => {
  return (  
    <NavigationBar
      navigationItems={navigationItems} 
      routePrefix={"/user/" + userId}
      withPersistQueryString
    />
  );
}
 
export default UserContentNavigationBar;