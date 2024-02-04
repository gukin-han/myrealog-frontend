import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CustomHeading1: Components["h1"] = ({ node, ...props }) => (
  <h1
    className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
    {...props}
  />
);

const CustomHeading2: Components["h2"] = ({ node, ...props }) => (
  <h2
    className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-20 first:mt-0"
    {...props}
  />
);

const CustomHeading3: Components["h3"] = ({ node, ...props }) => (
  <h3
    className="scroll-m-20 text-2xl font-semibold tracking-tight mt-14"
    {...props}
  />
);

const CustomHeading4: Components["h4"] = ({ node, ...props }) => (
  <h4
    className="scroll-m-20 text-xl font-semibold tracking-tight mt-10"
    {...props}
  />
);

const CustomParagraph: Components["p"] = ({ node, ...props }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
);

const CustomBlockquote: Components["blockquote"] = ({ node, ...props }) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
);

const CustomList: Components["ul"] = ({ node, ...props }) => (
  <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
);

const CustomCode: Components["code"] = ({ node, ...props }) => (
  <code
    className="relative bg-slate-100 dark:bg-slate-800 rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
    {...props}
  />
);

const CodeBlock: Components["code"] = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      style={darcula}
      language={match[1]}
      PreTag="div"
      {...props}
      className="text-sm"
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className ? className : ""} {...props}>
      {children}
    </code>
  );
};

interface MarkdownViewProps {
  children?: string;
}

export default function MarkdownView({ children }: MarkdownViewProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: CustomHeading1,
        h2: CustomHeading2,
        h3: CustomHeading3,
        p: CustomParagraph,
        blockquote: CustomBlockquote,
        ul: CustomList,
        code: CodeBlock,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
