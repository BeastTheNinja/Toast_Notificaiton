

import { ToastProvider } from './Components/Toast'
import ToastDemo from './Components/Toast/ToastDemo'

function App() {
  return (
    <ToastProvider>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />

        <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
          <ToastDemo />

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <p className="font-semibold text-white">Tips</p>
            <p className="mt-2">
              Brug `useToast()` i dine egne komponenter og kald `showToast('Besked', options)`.
              Hvis du ikke angiver en type, får du automatisk en success besked.
            </p>
          </div>
        </main>
      </div>
    </ToastProvider>
  )
}

export default App
