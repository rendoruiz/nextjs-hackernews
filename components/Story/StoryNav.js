import NavbarWrapper from "../Navbar/NavbarWrapper";
import NavbarItem from "../Navbar/NavbarItem";
import FireGlyph from "../Glyphs/FireGlyph";
import LightningGlyph from "../Glyphs/LightningGlyph";
import TrendUpGlyph from "../Glyphs/TrendUpGlyph";
import DropdownWrapper from "../Dropdown/DropdownWrapper";
import { DropdownItemRoute } from "../Dropdown/DropdownItem";
import clsx from "clsx";
import ChevronDownGlyph from "../Glyphs/ChevronDownGlyph";

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
      {/* dropdown */}
      <div className="grid bp500:hidden">
        <DropdownWrapper 
          isHorizontal
          customToggle={DropdownToggle(activeRoute)}
          toggleClassName="flex items-center rounded-full pl-2 pr-3 py-[0.375rem] bg-brandButtonSelected"
        >
          {
            navItems.map((item, index) => 
              <DropdownItemRoute
                key={index}
                displayText={item.text}
                displayGlyph={item.glyph}
                title={`view ${item.text.toLowerCase()} stories`}
                route={item.route}
                isSelected={item.route === activeRoute}
              />
            )
          }
        </DropdownWrapper>
      </div>

      {/* list */}
      {
        navItems.map((item, index) => 
          <div className="hidden bp500:grid" key={index}>
            <NavbarItem
              
              route={item.route}
              text={item.text}
              glyph={item.glyph}
              isSelected={item.route === activeRoute}
            />
          </div>
        )
      }
    </NavbarWrapper>
  );
}

const DropdownToggle = (activeRoute) => {
  return (
    <>
      {
        navItems.map((item, index) => 
          <div
            key={index}
            className={clsx(
              'grid grid-flow-col auto-cols-auto items-center gap-2 font-bold text-brandOrange',
              { 'hidden': item.route !== activeRoute }
            )}
          >
            { item.glyph }
            <span>{ item.text }</span>
            <ChevronDownGlyph className="-mb-1 -ml-1 w-5 h-5" />
          </div>
        )
      }
    </>
  )
}
 
export default StoryNav;