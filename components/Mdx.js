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
      <pre className="my-8 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-900">
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
      className="mb-6 leading-relaxed text-gray-500 dark:text-gray-200"
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
