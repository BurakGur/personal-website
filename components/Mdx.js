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
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function CodeBlock({ children }) {
  return (
    <div className="prose dark:prose-dark">
      <pre className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 my-8">
        {children}
      </pre>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  p: props => <p className="mb-6 dark:text-gray-200 text-base" {...props} />,
  pre: CodeBlock,
  h3: props => <h3 className="text-xl font-bold mb-2" {...props} />
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  );
}
