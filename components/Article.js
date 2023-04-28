import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { locale } from '../config';
import 'moment/locale/tr';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Article = ({ article }) => {
  return (
    <div>
      <div className="text-4xl font-bold text-gray-700 dark:text-gray-100">
        {article.title}
      </div>
      <div className="mb-6 mt-2 text-gray-500 dark:text-gray-300">
        <Moment format="Do MMMM YYYY" locale={locale}>
          {article.published_at}
        </Moment>
      </div>
      <ReactMarkdown
        className="prose dark:prose-dark"
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={atomOneDark}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {article.content}
      </ReactMarkdown>
    </div>
  );
};

export default Article;
