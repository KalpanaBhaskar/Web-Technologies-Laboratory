import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postsApi } from '../api';
import { formatDate } from '../utils';

export default function Archive() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    postsApi
      .getAll()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await postsApi.delete(id);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="archive-page">
      <div className="container">
        <div className="form-header">
          <h1 className="form-title">Archive</h1>
          <p className="form-subtitle">
            Browse and manage all published posts.
          </p>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {loading ? (
          <div className="loading-state">
            <div className="spinner" />
            <span>Loading archive...</span>
          </div>
        ) : posts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
            </div>
            <h3 className="empty-state-title">Archive is empty</h3>
            <p className="empty-state-text">Posts you create will appear here for easy management.</p>
            <Link to="/create" className="btn-primary">Create a post</Link>
          </div>
        ) : (
          <div className="archive-list">
            {posts.map((post) => (
              <div key={post._id} className="archive-item">
                <time className="archive-date">{formatDate(post.createdAt)}</time>
                <div>
                  <Link to={`/post/${post._id}`} className="archive-title">{post.title}</Link>
                  <div className="archive-author">by {post.author}</div>
                </div>
                <div className="archive-actions">
                  <Link to={`/edit/${post._id}`} className="btn-ghost">Edit</Link>
                  <button type="button" className="btn-ghost btn-danger" onClick={() => handleDelete(post._id, post.title)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
