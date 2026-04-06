

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-on-surface)] selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)]">

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-[var(--color-outline-variant)]/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold font-display tracking-tight text-[#e2e2e2]">
            Lumio<span className="text-[var(--color-primary)]">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[var(--color-on-surface-variant)]">
            <a href="#features" className="hover:text-[var(--color-primary)] transition-colors">Features</a>
            <a href="#ai" className="hover:text-[var(--color-primary)] transition-colors">AI Intelligence</a>
            <a href="#download" className="hover:text-[var(--color-primary)] transition-colors">Download</a>
          </div>
          <button className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-2.5 rounded-md font-semibold hover:bg-[#ffbbf7] transition-colors">
            Download Android Beta
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Abstract solid decoration instead of gradient */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-secondary-container)] rounded-full mix-blend-screen opacity-20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-on-secondary-fixed)] rounded-full mix-blend-screen opacity-30 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center flex-1 relative z-10">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-block border border-[var(--color-outline-variant)]/40 bg-[var(--color-surface-lowest)] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-[var(--color-primary)] uppercase">
              Exclusive Android Beta
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-[#ffffff]">
              Wake up to <br />
              <span className="text-[var(--color-primary)]">Intelligence</span>
            </h1>
            <p className="text-xl text-[var(--color-on-surface-variant)] font-body max-w-lg leading-relaxed">
              Lumio is the first premium focus and alarm app powered explicitly by Gemini & Groq. Available now in an Android-exclusive early beta—experience the future of AI-assisted wake routines perfectly integrated into your Android device.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[var(--color-primary)] text-[var(--color-on-primary)] px-8 py-4 rounded-md font-bold text-lg hover:bg-[#ffbbf7] transition-all duration-300 shadow-[0_0_24px_rgba(255,170,244,0.15)] flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.523 15.3414c-.0128.0064-.0256.0064-.0384 0L12 12.4414l-5.4847 2.9a.0538.0538 0 0 1-.0384 0 .0419.0419 0 0 1-.0192-.0192.0538.0538 0 0 1 0-.0384L12 9.5586l5.5423 5.7252a.0538.0538 0 0 1 0 .0384.0419.0419 0 0 1-.0193.0192zM12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" /></svg>
                Download Android APK
              </button>
              <button className="w-full sm:w-auto bg-[var(--color-surface-bright)]/10 glass-panel border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[var(--color-surface-bright)]/20 transition-all duration-300">
                View Genkit Features
              </button>
            </div>
          </div>

          {/* Mockup Placeholder - High Contrast Solid Panels */}
          <div className="relative w-full h-[600px] flex justify-center items-center">
            {/* Background panels */}
            <div className="absolute w-[80%] h-[90%] bg-[var(--color-surface-high)] rounded-[2rem] border border-[var(--color-outline-variant)]/30 transform rotate-[-6deg] shadow-2xl"></div>
            <div className="absolute w-[80%] h-[90%] bg-[var(--color-surface-high)] rounded-[2rem] border border-[var(--color-primary)]/20 transform rotate-[3deg] shadow-2xl"></div>

            {/* Main Phone Mockup */}
            <div className="relative w-[320px] h-[650px] bg-[var(--color-base)] rounded-[3rem] border-8 border-[var(--color-surface-highest)] overflow-hidden shadow-2xl flex flex-col pt-12 pb-8 px-6">
              <div className="absolute top-0 inset-x-0 h-6 bg-[var(--color-surface-highest)] rounded-b-3xl w-40 mx-auto"></div>

              {/* UI Mockup Details */}
              <div className="w-full h-full flex flex-col gap-6">
                <div className="flex justify-between items-end">
                  <div className="text-[var(--color-on-surface-variant)] text-sm uppercase tracking-wider">Next Alarm</div>
                  <div className="bg-[var(--color-secondary-container)] text-[var(--color-primary)] text-xs px-2 py-1 rounded">Focus Start</div>
                </div>
                <div className="text-7xl font-display font-medium text-white tracking-tighter">
                  06:30
                </div>

                {/* AI Card */}
                <div className="mt-8 bg-[var(--color-surface-low)] rounded-2xl p-5 border border-[var(--color-outline-variant)]/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-bl-full"></div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"></div>
                    <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">AI Suggestion</div>
                  </div>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                    "Early deep-work wake recommended based on your scheduled Genkit review."
                  </p>
                </div>

                {/* Routine Items */}
                <div className="flex-1 flex flex-col gap-3 mt-4">
                  <div className="bg-[var(--color-surface-lowest)] p-4 rounded-xl flex items-center justify-between border border-[var(--color-outline-variant)]/20">
                    <div className="text-sm font-medium">Morning Hydration</div>
                    <div className="w-5 h-5 rounded-full border border-[var(--color-outline)]"></div>
                  </div>
                  <div className="bg-[var(--color-surface-lowest)] p-4 rounded-xl flex items-center justify-between border border-[var(--color-outline-variant)]/20">
                    <div className="text-sm font-medium">Focus Block</div>
                    <div className="text-xs text-[var(--color-on-surface-variant)]">2h</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-[var(--color-surface-lowest)] relative border-t border-[var(--color-outline-variant)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Designed with Nocturnal Precision</h2>
            <p className="text-[var(--color-on-surface-variant)] text-lg mb-16">
              Lumio breaks the template. We treat time and focus as luxury commodities. An interface that feels like a high-end physical darkroom: stark, focused, and deeply immersive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)]/30 rounded-2xl p-10 hover:border-[var(--color-primary)]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center mb-6 text-[var(--color-primary)] text-xl font-bold font-display">G</div>
              <h3 className="text-xl font-bold mb-3">Gemini Integration</h3>
              <p className="text-[var(--color-on-surface-variant)]">
                Direct calls to the Gemini model running native on Android to securely analyze your schedule and proactively set the optimal focus routines.
              </p>
            </div>
            <div className="bg-[var(--color-surface-high)] border border-[var(--color-primary)]/40 rounded-2xl p-10 hover:border-[var(--color-primary)] transition-colors transform md:-translate-y-4 shadow-[0_0_20px_rgba(255,170,244,0.05)]">
              <div className="w-12 h-12 rounded-lg bg-[#2E0249] flex items-center justify-center mb-6 text-[#FFAAF4] text-xl font-bold font-display">Gk</div>
              <h3 className="text-xl font-bold mb-3 text-white">Genkit Remote Flow & Groq</h3>
              <p className="text-[#d4c1ce] mb-6">
                Leverages Groq's lightning-fast inference for real-time daily alarm choices without slowing down your app. Designed exclusively for the Android Beta.
              </p>
              <button className="w-full bg-[var(--color-surface-bright)]/30 glass-panel border border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-2 rounded font-semibold hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-colors text-sm">
                Download Beta
              </button>
            </div>
            <div className="bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)]/30 rounded-2xl p-10 hover:border-[var(--color-primary)]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary-container)] flex items-center justify-center mb-6 text-[var(--color-primary)] text-xl font-bold font-display">B</div>
              <h3 className="text-xl font-bold mb-3">Android Beta Core</h3>
              <p className="text-[var(--color-on-surface-variant)]">
                Optimized perfectly for Android system alarms. Built using the Flutter engine with native Android background isolation for uninterrupted execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-base)] border-t border-[var(--color-outline-variant)]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-display tracking-tight text-[var(--color-on-surface-variant)]">
            Lumio<span className="text-[var(--color-primary)]">.</span>
          </div>
          <div className="text-sm text-[var(--color-outline)]">
            &copy; 2026 Lumio App. All rights reserved. Built with Flutter, Genkit & Groq.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
