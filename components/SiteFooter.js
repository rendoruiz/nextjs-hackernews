const SiteFooter = () => {
  return (  
    <footer className="grid gap-1 px-5 py-4 text-xs text-brandTextPrimary text-center tracking-wide select-none dark:text-brandDarkTextPrimary">
      <p>Crafted with Next.js & Tailwind CSS with ❤️</p>
      <p>
        <span>Fork @ </span>
        <a 
          href="https://github.com/rendoruiz/nextjs-hackernews"
          target="_blank"
          className="hover:text-brandOrange hover:underline dark:hover:text-brandOrange/90"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
 
export default SiteFooter;