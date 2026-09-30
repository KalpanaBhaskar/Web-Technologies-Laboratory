import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { postsApi } from '../api';

export default function Create() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [loading, setLoading] = useState(isEditing);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEditing) return;
    postsApi
      .getOne(id)
      .then((post) => {
        setTitle(post.title);
        setContent(post.content);
        setAuthor(post.author);
        setTags(post.tags?.join(', ') || '');
        setExcerpt(post.excerpt || '');
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, isEditing]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const body = {
      title,
      content,
      author,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      excerpt: excerpt || content.slice(0, 160),
    };

    try {
      if (isEditing) {
        await postsApi.update(id, body);
        navigate(`/post/${id}`);
      } else {
        const post = await postsApi.create(body);
        navigate(`/post/${post._id}`);
      }
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
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

  return (
    <div className="form-page">
      <div className="container-narrow">
        {isEditing && (
          <Link to={`/post/${id}`} className="back-link">← Back to post</Link>
        )}

        <div className="form-header">
          <h1 className="form-title">{isEditing ? 'Edit Post' : 'Write a New Post'}</h1>
          <p className="form-subtitle">
            {isEditing ? 'Update your story and save changes.' : 'Share your ideas with the Inkwell community.'}
          </p>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              id="title"
              className="form-input"
              placeholder="An engaging title for your post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              id="author"
              className="form-input"
              placeholder="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              id="content"
              className="form-textarea content-area"
              placeholder="Write your story here. Separate paragraphs with blank lines."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <p className="form-hint">Tip: Use blank lines to separate paragraphs.</p>
          </div>

          <div className="form-group">
            <label htmlFor="excerpt" className="form-label">Excerpt <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optional)</span></label>
            <textarea
              id="excerpt"
              className="form-textarea"
              placeholder="A brief summary shown in post listings"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags" className="form-label">Tags <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(comma-separated)</span></label>
            <input
              id="tags"
              className="form-input"
              placeholder="technology, design, life"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? 'Saving...' : isEditing ? 'Save Changes' : 'Publish Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
