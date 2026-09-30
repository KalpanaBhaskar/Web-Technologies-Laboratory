export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatRelative(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(dateStr);
}

export function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

export function buildCommentTree(comments) {
  const map = new Map();
  const roots = [];

  for (const c of comments) {
    map.set(String(c._id), { ...c, replies: [] });
  }

  for (const c of comments) {
    const node = map.get(String(c._id));
    if (c.parentId) {
      const parent = map.get(String(c.parentId));
      if (parent) {
        parent.replies.push(node);
        continue;
      }
    }
    roots.push(node);
  }

  return roots;
}
