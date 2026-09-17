interface TagShareBlockProps {
  tags: string[];
}

const SOCIAL_ICONS = ["icon-fb", "icon-in", "icon-ig", "icon-x"];

export default function TagShareBlock({ tags }: TagShareBlockProps) {
  return (
    <div className="tag-share mb-70">
      <div className="tags">
        <p className="h3 title letter-space--3 fw-6 color-title">Tags</p>
        <ul className="list-tags d-flex flex-wrap g-10">
          {tags.map((tag) => (
            <li key={tag}>
              <a href="#" className="tags-item">
                <span>{tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="share">
        <p className="h3 title letter-space--3 fw-6 color-title">Share</p>
        <ul className="d-flex align-items-center flex-wrap g-10">
          {SOCIAL_ICONS.map((icon) => (
            <li key={icon}>
              <a href="#" className="item-social">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
