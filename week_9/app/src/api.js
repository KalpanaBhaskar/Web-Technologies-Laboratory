const BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }

  return data;
}

export const postsApi = {
  getAll: () => request('/posts'),
  getOne: (id) => request(`/posts/${id}`),
  create: (body) => request('/posts', { method: 'POST', body: JSON.stringify(body) }),
  update: (id, body) => request(`/posts/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: (id) => request(`/posts/${id}`, { method: 'DELETE' }),
};

export const commentsApi = {
  getByPost: (postId) => request(`/comments/post/${postId}`),
  create: (postId, body) =>
    request(`/comments/post/${postId}`, { method: 'POST', body: JSON.stringify(body) }),
  delete: (id) => request(`/comments/${id}`, { method: 'DELETE' }),
};
