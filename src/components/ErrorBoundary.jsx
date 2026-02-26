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

      // Using inline styles as fallback since CSS might not have loaded
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          padding: '1rem',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          <div style={{
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Accent top bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #ef4444, #f59e0b, #ef4444)',
            }} />

            <div style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 1rem',
              borderRadius: '16px',
              backgroundColor: '#fee2e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="32" height="32" fill="none" stroke="#ef4444" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>

            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', textAlign: 'center' }}>
              Er ging iets mis
            </h1>
            <p style={{ color: '#475569', fontSize: '0.875rem', marginBottom: '1rem', textAlign: 'center' }}>
              De app is gecrasht. De fout is automatisch opgeslagen in het foutlogboek.
            </p>

            {/* Error details */}
            <div style={{
              background: '#fee2e2',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '12px',
              padding: '0.875rem',
              marginBottom: '1.25rem',
            }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ef4444', marginBottom: '0.25rem' }}>
                Foutmelding:
              </p>
              <p style={{ fontSize: '0.8rem', color: '#991b1b', wordBreak: 'break-word', fontFamily: 'monospace' }}>
                {msg}
              </p>
              {stack && (
                <pre style={{
                  fontSize: '0.7rem',
                  color: '#94a3b8',
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
                  background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.65rem 1rem',
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
                  background: this.state.copied ? '#d1fae5' : '#f1f5f9',
                  color: this.state.copied ? '#065f46' : '#475569',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '0.65rem 1rem',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                }}
              >
                {this.state.copied ? 'Gekopieerd!' : 'Kopieer fout'}
              </button>
            </div>

            <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '1rem', textAlign: 'center' }}>
              Foutlogboek beschikbaar in localStorage onder <code>scrolls_error_log</code>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
