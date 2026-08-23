import Button from '../components/common/Button';

const NotFound = () => (
  <main id="main-content" style={{ textAlign: 'center', padding: '6rem var(--spacing-lg)' }}>
    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '6rem', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1 }}>
      404
    </p>
    <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Page Not Found</h1>
    <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto var(--spacing-xl)' }}>
      The page you're looking for doesn't exist or has been moved. Let's get you back on track.
    </p>
    <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Button to="/" variant="primary">Back to Homepage</Button>
      <Button to="/admissions" variant="outline">Explore Admissions</Button>
    </div>
  </main>
);

export default NotFound;
