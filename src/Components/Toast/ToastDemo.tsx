import { useToast } from './useToast'

const ToastDemo = () => {
    const { showToast } = useToast()

    const showStack = () => {
        showToast('Du er logget ind. Velkommen tilbage!')
        showToast('Husk at gemme dine ændringer.', { variant: 'warning' })
        showToast('Ups, noget gik galt. Prøv igen.', { variant: 'error' })
    }

    return (
        <div className="flex flex-col gap-6">
            <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Toast Studio</p>
                <h1 className="mt-3 text-4xl font-semibold text-white">Notifikationer der faktisk fænger</h1>
                <p className="mt-3 max-w-xl text-base text-slate-300">
                    Tryk på knapperne og se hvordan beskederne popper frem. Alle toasts lukker sig selv efter et par
                    sekunder, og du kan skifte farve, type og placering.
                </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <button
                    type="button"
                    onClick={() => showToast('Alt er gemt. Godt arbejde!')}
                    className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-left text-sm font-semibold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-500/20"
                >
                    Default success
                </button>
                <button
                    type="button"
                    onClick={() => showToast('Pas på! Der er stadig felter du mangler.', { variant: 'warning' })}
                    className="rounded-2xl border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-left text-sm font-semibold text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-500/20"
                >
                    Warning toast
                </button>
                <button
                    type="button"
                    onClick={() => showToast('Fejl: serveren svarer ikke lige nu.', { variant: 'error' })}
                    className="rounded-2xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-left text-sm font-semibold text-rose-100 transition hover:-translate-y-0.5 hover:bg-rose-500/20"
                >
                    Error toast
                </button>
                <button
                    type="button"
                    onClick={() => showToast('Vi har gemt dit valg nederst til højre.', { position: 'bottom-right' })}
                    className="rounded-2xl border border-slate-400/40 bg-slate-500/10 px-4 py-3 text-left text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-500/20"
                >
                    Bottom right
                </button>
                <button
                    type="button"
                    onClick={() => showToast('Denne dukker op i toppen til venstre.', { position: 'top-left' })}
                    className="rounded-2xl border border-slate-400/40 bg-slate-500/10 px-4 py-3 text-left text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-500/20"
                >
                    Top left
                </button>
                <button
                    type="button"
                    onClick={showStack}
                    className="rounded-2xl border border-slate-300/40 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                    Stack tre toasts
                </button>
            </div>
        </div>
    )
}

export default ToastDemo
