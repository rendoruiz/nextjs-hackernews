import Navbar from "../NavBar";
import NavbarItem from "../NavBarItem";
import FireGlyph from "../Glyphs/FireGlyph";
import LightningGlyph from "../Glyphs/LightningGlyph";
import TrendUpGlyph from "../Glyphs/TrendUpGlyph";

const navItems = [
  {
    route: '/',
    text: 'Top',
    glyph: <FireGlyph />,
  },
  {
    route: '/best',
    text: 'Best',
    glyph: <LightningGlyph />,
  },
  {
    route: '/new',
    text: 'New',
    glyph: <TrendUpGlyph />,
  },
];

const StoryNav = ({ activeRoute }) => {
  return ( 
    <Navbar>
      {
        navItems.map((item, index) => 
          <NavbarItem
            key={index}
            route={item.route}
            text={item.text}
            glyph={item.glyph}
            isActive={item.route === activeRoute}
          />
        )
      }
    </Navbar>
  );
}
 
export default StoryNav;