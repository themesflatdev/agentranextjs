import { Fragment } from "react";
import Image from "next/image";
import type { BlogContentBlock } from "@/data/blog";

interface BlogContentRendererProps {
  content: BlogContentBlock[];
}

// The original markup wraps each article section in its own
// `.blog-details-content` div, with a new section starting wherever a
// heading paragraph appears. Grouping by that same rule here reconstructs
// the original nesting from the flat block array without duplicating the
// grouping in the data itself.
export default function BlogContentRenderer({
  content,
}: BlogContentRendererProps) {
  const groups: BlogContentBlock[][] = [];

  content.forEach((block) => {
    const startsNewGroup = block.type === "paragraph" && block.heading;
    if (startsNewGroup || groups.length === 0) {
      groups.push([block]);
    } else {
      groups[groups.length - 1].push(block);
    }
  });

  return (
    <>
      {groups.map((group, groupIndex) => (
        <div className="blog-details-content mb-40" key={groupIndex}>
          {group.map((block, blockIndex) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <Fragment key={blockIndex}>
                    {block.heading && (
                      <p className="title text-title-4 fw-6 letter-space--3 color-title mb-20">
                        {block.heading}
                      </p>
                    )}
                    <p className="text ff-2 color-paragraph mb-40">
                      {block.text}
                    </p>
                  </Fragment>
                );
              case "image":
                return (
                  <div className="image mb-40" key={blockIndex}>
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={850}
                      height={500}
                    />
                  </div>
                );
              case "list":
                return (
                  <ul className="mb-47" key={blockIndex}>
                    {block.items.map((item) => (
                      <li className="mb-10" key={item}>
                        <a
                          href="#"
                          className="benefit-item fw-5 letter-space--2 ff-2 color-paragraph"
                        >
                          <i className="icon-check"></i>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                );
              case "quote":
                return (
                  <div className="wg-quote" key={blockIndex}>
                    <p className="text-quote h3 fw-6 letter-space--3">
                      {block.text}
                    </p>
                    <div className="user-quote">
                      <a href="#" className="image">
                        <Image
                          src={block.avatar}
                          alt={block.authorName}
                          width={70}
                          height={70}
                        />
                      </a>
                      <div className="content">
                        <a href="#" className="name h5 fw-7 letter-space--3">
                          {block.authorName}
                        </a>
                        <p className="ff-2 color-paragraph">
                          {block.authorRole}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      ))}
    </>
  );
}
