import IconButton from './IconButton';

function Footer() {
  return (
    <footer className="my-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconButton href="mailto:gurbrk@gmail.com" title="email" />
          <IconButton href="https://x.com/gurbrk" title="@gurbrk" />
          <IconButton href="https://github.com/burakgur" title="github" />
          <IconButton href="https://medium.com/@burakgur" title="medium" />
        </div>
        <IconButton href="/rss.xml" title="rss" />
      </div>
      <div className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
        This website is open-source, and you can access its code on{' '}
        <a
          href="https://github.com/BurakGur/personal-website"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-gray-600 hover:underline dark:hover:text-gray-300"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
