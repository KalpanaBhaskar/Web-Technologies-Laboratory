import { useState, useEffect, useCallback } from 'react';
import { commentsApi } from '../api';
import { buildCommentTree } from '../utils';
import CommentItem from './CommentItem';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState(null);

  const loadComments = useCallback(async () => {
    try {
      setLoading(true);
      const data = await commentsApi.getByPost(postId);
      setComments(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    try {
      await commentsApi.create(postId, {
        author: author.trim() || 'Anonymous',
        content: content.trim(),
        parentId: replyTo,
      });
      setContent('');
      setReplyTo(null);
      await loadComments();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this comment?')) return;
    try {
      await commentsApi.delete(id);
      await loadComments();
    } catch (err) {
      setError(err.message);
    }
  }

  const tree = buildCommentTree(comments);
  const totalCount = comments.length;

  return (
    <section className="comments-section">
      <div className="comments-header">
        <h2 className="comments-title">
          Discussion
          {!loading && <span className="comments-count"> · {totalCount} {totalCount === 1 ? 'comment' : 'comments'}</span>}
        </h2>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <form className="comment-form" onSubmit={handleSubmit}>
        {replyTo && (
          <div style={{ marginBottom: '0.75rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            Replying to a comment —{' '}
            <button type="button" className="btn-ghost" style={{ padding: '0.125rem 0.375rem' }} onClick={() => setReplyTo(null)}>
              Cancel
            </button>
          </div>
        )}
        <div className="comment-form-row">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="comment-author" className="form-label">Name</label>
            <input
              id="comment-author"
              className="form-input"
              placeholder="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="comment-content" className="form-label">Comment</label>
            <textarea
              id="comment-content"
              className="form-textarea"
              placeholder="Share your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="comment-form-actions">
          <button type="submit" className="btn-primary" disabled={submitting || !content.trim()}>
            {submitting ? 'Posting...' : replyTo ? 'Post Reply' : 'Post Comment'}
          </button>
        </div>
      </form>

      {loading ? (
        <div className="loading-state" style={{ padding: '2rem' }}>
          <div className="spinner" />
        </div>
      ) : tree.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', textAlign: 'center', padding: '2rem 0' }}>
          No comments yet. Start the conversation.
        </p>
      ) : (
        <div className="comments-list">
          {tree.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              onReply={setReplyTo}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}
