import Image from "next/image";
import type { Comment } from "@/data/blog";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="wg-comment mb-70">
      <p className="title h3 fw-6 letter-space--3 color-title mb-40">
        {comments.length} Customer Comment{comments.length === 1 ? "" : "s"}
      </p>
      {comments.map((comment, index) => {
        const className = [
          "comment-item",
          index < comments.length - 1 ? "mb-30" : "",
          comment.isReply ? "style-reply" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div className={className} key={comment.id}>
            <div className="image">
              <Image
                src={comment.avatar}
                alt={comment.name}
                width={100}
                height={100}
              />
            </div>
            <div className="item-content">
              <div className="top">
                <a href="#" className="name fw-6 ff-2">
                  {comment.name}
                </a>
                <span className="line"></span>
                <span className="date ff-2 color-paragraph">
                  {comment.date}
                </span>
              </div>
              <p className="text-comment ff-2">{comment.text}</p>
              <a href="#form-comment" className="tf-btn-reply">
                <span>Reply</span>
                <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
