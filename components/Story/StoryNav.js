import NavigationBar from '../Shared/NavigationBar';
import FireGlyph from "../Glyphs/FireGlyph";
import LightningGlyph from "../Glyphs/LightningGlyph";
import TrendUpGlyph from "../Glyphs/TrendUpGlyph";

const navItems = [
  {
    route: '/',
    text: 'Top',
    glyph: <FireGlyph className="w-full h-full" />,
  },
  {
    route: '/best',
    text: 'Best',
    glyph: <LightningGlyph className="w-full h-full" />,
  },
  {
    route: '/new',
    text: 'New',
    glyph: <TrendUpGlyph className="w-full h-full" />,
  },
];

const StoryNav = () => {
  return ( 
    <NavigationBar navigationItems={navItems} />
  );
}
export default StoryNav;