import React from 'react';

const IconButton = ({ href, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex text-sm text-gray-500 transition hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-100"
  >
    {title}
  </a>
);

export default IconButton;
