import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const CustomLink = props => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props}> {props.children}</a>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function CodeBlock({ children }) {
  return (
    <div className="prose dark:prose-dark">
      <pre className="my-8 overflow-x-scroll rounded-lg bg-gray-500 p-4 no-scrollbar">
        {children}
      </pre>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  p: props => (
    <p
      className="mb-6 leading-relaxed text-gray-500 dark:text-gray-300"
      {...props}
    >
      {props.children}
    </p>
  ),
  pre: CodeBlock,
  h3: props => (
    <h3 className="mb-4 text-2xl font-bold" {...props}>
      {props.children}
    </h3>
  ),
  h4: props => (
    <h4 className="mb-2 text-xl font-bold" {...props}>
      {props.children}
    </h4>
  ),
  ol: props => (
    <ol className="mb-6 list-inside list-decimal" {...props}>
      {props.children}
    </ol>
  ),
  li: props => (
    <li
      className="mb-3 leading-relaxed text-gray-500 dark:text-gray-200"
      {...props}
    >
      {props.children}
    </li>
  ),
  ul: props => (
    <ul className="mb-6 list-inside list-disc" {...props}>
      {props.children}
    </ul>
  ),
  blockquote: props => {
    return (
      <blockquote
        className="mb-12 mt-10 border-l-4 border-gray-300 pl-4 italic dark:border-gray-700"
        {...props}
      >
        {props.children}
      </blockquote>
    );
  },
  code: props => (
    <code className="rounded-md text-gray-900 dark:text-gray-100" {...props}>
      {props.children}
    </code>
  )
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  );
}
