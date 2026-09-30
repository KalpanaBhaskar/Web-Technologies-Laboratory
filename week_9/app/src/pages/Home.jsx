import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postsApi } from '../api';
import PostSummary from '../components/PostSummary';

export default function Home() {
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

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Stories worth reading.<br />Discussions worth having.</h1>
          <p className="hero-subtitle">
            A curated space for thoughtful writing and meaningful conversation.
            Create, explore, and engage with ideas that matter.
          </p>
        </div>
      </section>

      <section className="posts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Posts</h2>
            <Link to="/archive" className="btn-ghost">View all →</Link>
          </div>

          {error && <div className="error-banner">{error}</div>}

          {loading ? (
            <div className="loading-state">
              <div className="spinner" />
              <span>Loading posts...</span>
            </div>
          ) : posts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="empty-state-title">No posts yet</h3>
              <p className="empty-state-text">Be the first to share your story with the world.</p>
              <Link to="/create" className="btn-primary">Write your first post</Link>
            </div>
          ) : (
            <div className="posts-grid">
              {posts.slice(0, 6).map((post) => (
                <PostSummary key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
