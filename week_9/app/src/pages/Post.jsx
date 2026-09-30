import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { postsApi } from '../api';
import { formatDate, readingTime } from '../utils';
import CommentSection from '../components/CommentSection';

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    postsApi
      .getOne(id)
      .then(setPost)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleDelete() {
    if (!confirm('Delete this post permanently? All comments will also be removed.')) return;
    setDeleting(true);
    try {
      await postsApi.delete(id);
      navigate('/archive');
    } catch (err) {
      setError(err.message);
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <span>Loading post...</span>
      </div>
    );
  }

  if (error && !post) {
    return (
      <div className="container-narrow" style={{ padding: '4rem 1.5rem' }}>
        <div className="error-banner">{error}</div>
        <Link to="/" className="back-link">← Back to home</Link>
      </div>
    );
  }

  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);

  return (
    <article className="post-page">
      <div className="container-narrow">
        <Link to="/" className="back-link">← All posts</Link>

        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta-bar">
            <span>By <strong>{post.author}</strong></span>
            <span>{formatDate(post.createdAt)}</span>
            <span>{readingTime(post.content)}</span>
            {post.tags?.length > 0 && (
              <div className="post-card-tags" style={{ display: 'inline-flex' }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="post-body">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="post-actions">
          <Link to={`/edit/${id}`} className="btn-secondary">Edit Post</Link>
          <button type="button" className="btn-secondary btn-danger" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete Post'}
          </button>
        </div>

        <CommentSection postId={id} />
      </div>
    </article>
  );
}
