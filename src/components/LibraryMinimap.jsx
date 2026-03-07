import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * LibraryMinimap — navigatiekaart rechtsonder
 * Toont de bibliotheekstructuur als een kleine kaart en geeft de scrollpositie aan.
 * Klik op een sectie om erheen te scrollen.
 */
const LibraryMinimap = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const rafRef = useRef(null);

  const updateScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(Math.min(1, Math.max(0, progress)));

    // Determine active section based on scroll position
    if (sections.length > 0) {
      let activeIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            activeIdx = i;
          }
        }
      }
      setActiveSectionIndex(activeIdx);
    }
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScroll]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Uitgevouwen kaart */}
      {isOpen && (
        <div
          className="card p-3 w-52 shadow-xl animate-[scroll-reveal_0.2s_ease-out]"
          style={{ maxHeight: '70vh', overflowY: 'auto' }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Navigatiekaart</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-5 h-5 flex items-center justify-center rounded text-text-muted hover:text-text transition-colors"
              aria-label="Sluit minimap"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Voortgangsbalk */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-text-muted">Pagina</span>
              <span className="text-xs font-semibold text-primary">{Math.round(scrollProgress * 100)}%</span>
            </div>
            <div className="progress-bar h-1.5">
              <div className="progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
            </div>
          </div>

          {/* Secties */}
          <div className="space-y-0.5">
            <button
              onClick={scrollToTop}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                activeSectionIndex === -1 || scrollProgress < 0.02
                  ? 'bg-primary-50 text-primary font-semibold border border-primary-100'
                  : 'text-text-secondary hover:bg-bg-alt hover:text-text'
              }`}
            >
              <span className="text-sm flex-shrink-0">🏛️</span>
              <span className="truncate">Begin</span>
            </button>
            {sections.map((section, i) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                  i === activeSectionIndex && scrollProgress > 0.02
                    ? 'bg-primary-50 text-primary font-semibold border border-primary-100'
                    : 'text-text-secondary hover:bg-bg-alt hover:text-text'
                }`}
              >
                <span className="text-sm flex-shrink-0">{section.emoji}</span>
                <span className="truncate">{section.label}</span>
                {section.count != null && (
                  <span className="ml-auto text-text-muted font-normal flex-shrink-0">{section.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger knop */}
      <button
        onClick={() => setIsOpen(v => !v)}
        className="relative w-11 h-11 rounded-xl shadow-lg border border-border bg-surface hover:bg-bg-alt hover:border-primary/40 transition-all flex items-center justify-center group"
        aria-label={isOpen ? 'Sluit navigatiekaart' : 'Open navigatiekaart'}
        title="Navigatiekaart"
        style={{ boxShadow: 'var(--shadow-md)' }}
      >
        {/* Miniatuur kaartje */}
        <div className="w-6 h-7 relative flex flex-col justify-between gap-0.5 py-0.5">
          {/* Voortgangsindicator als verticale balk */}
          <div
            className="absolute left-0 top-0 w-0.5 rounded-full bg-primary transition-all"
            style={{ height: `${scrollProgress * 100}%`, maxHeight: '100%' }}
          />
          {/* Lijntjes die secties voorstellen */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-0.5 rounded-full ml-1 transition-colors"
              style={{
                width: `${70 + (i % 3) * 10}%`,
                backgroundColor: i === Math.round(activeSectionIndex % 5)
                  ? 'var(--color-primary)'
                  : 'var(--color-border-strong)',
                opacity: i === Math.round(activeSectionIndex % 5) ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
};

export default LibraryMinimap;
