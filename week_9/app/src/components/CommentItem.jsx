import { formatRelative } from '../utils';

export default function CommentItem({ comment, onReply, onDelete, depth = 0 }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-time">{formatRelative(comment.createdAt)}</span>
      </div>
      <p className="comment-body">{comment.content}</p>
      <div className="comment-actions">
        {depth < 2 && (
          <button type="button" className="btn-ghost" onClick={() => onReply(comment._id)}>
            Reply
          </button>
        )}
        <button type="button" className="btn-ghost btn-danger" onClick={() => onDelete(comment._id)}>
          Delete
        </button>
      </div>

      {comment.replies?.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply._id}
              comment={reply}
              onReply={onReply}
              onDelete={onDelete}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
