# Hacker News Viewer

[![Vercel Deployment Status](https://therealsujitk-vercel-badge.vercel.app/?app=recon-hackernews)](https://hn.rendo.me/)

The project is hosted on Vercel can be viewed live [here](https://recon-hackernews.vercel.app/) or at [hn.rendo.me](https://hn.rendo.me/).

This web app is my second attempt at a Hacker News Viewer viewer. Coincidentally, this is also my second Next.js project. The website is still live at [Netlify](https://cra.hn.rendo.me/) and archived repository can be viewed [here](https://github.com/rendoruiz/reactjs-hackernews).

## Changes

- Create React App to **[Next.js](https://nextjs.org/)** framework
- CSS Modules to **[Tailwind CSS](https://tailwindcss.com/)** framework for styling
- Moment.js to **[date-fns](https://date-fns.org/)** for date and time handling
- Font Awesome Icons to **[Heroicons](https://heroicons.dev/)** and **[Tabler Icons](https://tablericons.com/)** for *free* SVG icons


## Improvements

- [React Query](https://react-query.tanstack.com/) for server-side data cache
- [Recoil](https://recoiljs.org/) + [Recoil Persist](https://github.com/polemius/recoil-persist) for state management and data persistence
- [Radix](https://www.radix-ui.com/) for unstyled commonly used UI components
- Dark mode switch
- Comment permalinks
- Separate UI and UX suited for mobile usage
- Page and component loaders
- Overall more in line with Reddit's design and layout
- Better file/component organization

## Known Issues

- Performance is horrid on Firefox. **DO NOT** use on Firefox.