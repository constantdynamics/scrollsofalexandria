import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-parchment parchment px-4">
          <div className="decorative-border bg-parchment-dark p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">📜</div>
            <h1 className="text-2xl font-serif text-ink mb-3">Er ging iets mis</h1>
            <p className="text-ink-light mb-6">
              De app heeft een onverwachte fout ondervonden. Probeer de pagina te vernieuwen.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Vernieuw pagina
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
