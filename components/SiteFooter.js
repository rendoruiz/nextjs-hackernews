const SiteFooter = () => {
  return (  
    <footer className="grid gap-1 px-5 py-3 font-medium text-xs text-brandTextPrimary text-center tracking-wide">
      <p>Crafted with Next.js & Tailwind CSS with ❤️</p>
      <p>
        <span>Fork @ </span>
        <a 
          href="#"
          target="_blank"
          className="hover:text-brandOrange hover:underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
 
export default SiteFooter;