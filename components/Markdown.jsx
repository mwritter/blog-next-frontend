import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const MardownComponents = (media) => ({
  // Convert Markdown img to next/image component and set height, width and priority
  // example: ![AltText {priority}{768x432}](...
  //extract this into an Image Compoent might want to create a directory for these
  //markdown specific compoents
  //credit to Amir Ardalan https://amirardalan.com/blog/use-next-image-with-react-markdown
  p: (paragraph) => {
    const { node } = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0];
      const src = image.properties.src;
      const mediaImage = media.filter((m) => m.url == src).pop();
      const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "");
      const isPriority = image.properties.alt
        ?.toLowerCase()
        .includes("{priority}");
      const metaWidth = image.properties.alt.match(/{([^}]+)x/);
      const metaHeight = image.properties.alt.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : mediaImage?.width || 768;
      const height = metaHeight ? metaHeight[1] : mediaImage?.height || 432;

      return (
        <div className="flex justify-center">
          <Image
            src={src}
            width={width}
            height={height}
            className="postImg"
            alt={alt}
            priority={isPriority}
          />
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
  ...CodeBlock,
});

export default function Markdown({ post }) {
  const { content, media } = post;
  return (
    <div className="prose max-w-none">
      <ReactMarkdown components={MardownComponents(media)}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
