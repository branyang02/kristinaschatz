import '../styles/blog-menu.css';

import { Pane } from 'evergreen-ui';
import ReactMarkdown from 'react-markdown';

const generateTableOfContents = (markdownContent: string) => {
  let res = '### Contents\n---\n';
  const pattern = /^#+ (.*)$/gm;
  const matches = markdownContent.match(pattern);
  for (const match of matches || []) {
    const level = match.match(/^#+/)?.[0].length || 0;
    if (level === 1 || level === 3) continue;
    const title = match.replace(/^#+|\*+/g, '').trim();
    const id = title
      .replace(/\s+/g, '-')
      .toLowerCase()
      .replace(/[+.()]/g, '');
    if (level === 6) {
      res += `${'\t'.repeat(level - 4)}- [${title}](#${id})\n`;
    } else {
      res += `${'\t'.repeat(level - 4)}- ${'#'.repeat(level + 1)} [${title}](#${id})\n`;
    }
  }
  return res;
};

const BlogMenu = ({ markdownContent }: { markdownContent: string }) => {
  const toc = generateTableOfContents(markdownContent);

  return (
    <Pane padding="20px">
      <ReactMarkdown
        // eslint-disable-next-line react/no-children-prop
        children={toc}
        className="blog-menu"
      />
    </Pane>
  );
};

export default BlogMenu;
