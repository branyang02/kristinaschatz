import 'katex/dist/katex.min.css';
import '../styles/note-post.css';

import { majorScale, Pane, Spinner } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import CodeBlock from '../components/CodeBlock';
import NoteToc from '../components/NoteToc';
import StaticCodeBlock from '../components/StaticCodeBlock';
import TikZ from '../components/TikZ';

const NoteModules = import.meta.glob('../assets/notes/*.md', { as: 'raw' });
const BlogModules = import.meta.glob('../assets/blogs/*.md', { as: 'raw' });

type CodeProps = React.HTMLAttributes<HTMLElement> & {
  node?: unknown;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const components = {
  code({ inline, className, children, ...props }: CodeProps) {
    const match = /\w+/.exec(className || '');

    if (!inline && match) {
      const language = className?.split('language-').pop() || '';
      const content = Array.isArray(children) ? children.join('') : children;
      const code = String(content).replace(/\n$/, '');
      if (language.includes('execute-')) {
        return <CodeBlock initialCode={code} language={language.split('-').pop()} />;
      }
      if (language === 'tikz') {
        return <TikZ tikzScript={code} />;
      }
      return <StaticCodeBlock code={code} language={language} />;
    } else {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  },
};

function processMarkdown(markdownContent: string): string {
  const pattern = /```(\w+)/g;
  const processedContent = markdownContent.replace(pattern, '```language-$1');

  return processedContent;
}

const NotesBlogs = ({ type }: { type: string }) => {
  const params = useParams();
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const contentId = type === 'notes' ? params.noteId : params.blogId;

  useEffect(() => {
    const fetchNote = async () => {
      const modules = type === 'notes' ? NoteModules : BlogModules;
      for (const path in modules) {
        if (path.includes(contentId as string)) {
          const rawMDString = String(modules[path]);
          setMarkdownContent(processMarkdown(rawMDString));
        }
      }
    };

    fetchNote();
  }, [contentId]);

  if (!markdownContent) {
    return (
      <Pane
        display="flex"
        padding={majorScale(10)}
        justifyContent="center"
        height="100vh"
      >
        <Spinner />
      </Pane>
    );
  }

  return (
    <div className="overall-container">
      <Pane className="mw-page-container-inner">
        <Pane className="vector-column-start">
          <NoteToc markdownContent={markdownContent} />
        </Pane>
        <Pane className="mw-content-container">
          <Pane className="blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight, rehypeSlug]}
              components={components}
            >
              {markdownContent}
            </ReactMarkdown>
          </Pane>
        </Pane>
      </Pane>
    </div>
  );
};

export default NotesBlogs;
