import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as codeBlockTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
// credit to Thomas https://thetombomb.com/posts/adding-code-snippets-to-static-markdown-in-Next%20js
const CodeBlock = {
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={codeBlockTheme}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="className" {...props}>
        {" "}
        {children}{" "}
      </code>
    );
  },
};

export default CodeBlock;
