import { Component } from 'react';

const ERROR_LOG_KEY = 'scrolls_error_log';
const MAX_LOG_ENTRIES = 20;

function saveErrorToLog(error, info) {
  try {
    const existing = JSON.parse(localStorage.getItem(ERROR_LOG_KEY) || '[]');
    const entry = {
      timestamp: new Date().toISOString(),
      message: error?.message || String(error),
      stack: error?.stack?.substring(0, 1000) || '',
      componentStack: info?.componentStack?.substring(0, 500) || '',
      url: window.location.href,
    };
    const updated = [entry, ...existing].slice(0, MAX_LOG_ENTRIES);
    localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(updated));
  } catch {
    // localStorage not available
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, copied: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
    saveErrorToLog(error, info);
  }

  handleCopy = () => {
    const text = [
      `Tijdstip: ${new Date().toLocaleString('nl-NL')}`,
      `Fout: ${this.state.error?.message || this.state.error}`,
      `URL: ${window.location.href}`,
      `Stack: ${this.state.error?.stack?.substring(0, 500) || 'niet beschikbaar'}`,
    ].join('\n');
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2000);
    });
  };

  render() {
    if (this.state.hasError) {
      const msg = this.state.error?.message || String(this.state.error) || 'Onbekende fout';
      const stack = this.state.error?.stack?.split('\n').slice(1, 4).join('\n') || '';

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9FAFB',
          padding: '1rem',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          <div style={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⚠️</div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
              Er ging iets mis
            </h1>
            <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
              De app is gecrasht. De fout is automatisch opgeslagen in het foutlogboek.
            </p>

            {/* Error details */}
            <div style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: '8px',
              padding: '0.875rem',
              marginBottom: '1.25rem',
            }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#DC2626', marginBottom: '0.25rem' }}>
                Foutmelding:
              </p>
              <p style={{ fontSize: '0.8rem', color: '#991B1B', wordBreak: 'break-word', fontFamily: 'monospace' }}>
                {msg}
              </p>
              {stack && (
                <pre style={{
                  fontSize: '0.7rem',
                  color: '#9CA3AF',
                  marginTop: '0.5rem',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  maxHeight: '80px',
                  overflow: 'hidden',
                }}>
                  {stack}
                </pre>
              )}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  flex: 1,
                  background: '#2563EB',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.6rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                Vernieuw pagina
              </button>
              <button
                onClick={this.handleCopy}
                style={{
                  flex: 1,
                  background: this.state.copied ? '#D1FAE5' : '#F3F4F6',
                  color: this.state.copied ? '#065F46' : '#374151',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '0.6rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                {this.state.copied ? '✓ Gekopieerd' : 'Kopieer fout'}
              </button>
            </div>

            <p style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '1rem', textAlign: 'center' }}>
              Foutlogboek: open de browser-console (F12) of bekijk <code>scrolls_error_log</code> in localStorage.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
