import NavbarWrapper from "../Navbar/NavbarWrapper";
import NavbarItem from "../Navbar/NavbarItem";
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
    <NavbarWrapper>
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
    </NavbarWrapper>
  );
}
 
export default StoryNav;