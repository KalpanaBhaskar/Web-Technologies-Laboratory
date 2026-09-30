import { Link } from 'react-router-dom';
import { formatDate, readingTime } from '../utils';

export default function PostSummary({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="post-card">
      <div className="post-card-meta">
        <span>{formatDate(post.createdAt)}</span>
        <span className="dot" />
        <span>{readingTime(post.content)}</span>
      </div>

      <h2 className="post-card-title">{post.title}</h2>

      <p className="post-card-excerpt">{post.excerpt}</p>

      {post.tags?.length > 0 && (
        <div className="post-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="post-card-footer">
        <span className="post-card-author">{post.author}</span>
        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Read →</span>
      </div>
    </Link>
  );
}
