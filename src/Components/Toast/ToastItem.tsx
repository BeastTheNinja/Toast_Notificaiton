import type { ToastMessage, ToastVariant } from './types'

const VARIANT_STYLES: Record<ToastVariant, { accent: string; chip: string; label: string }> = {
    success: {
        accent: 'bg-emerald-400',
        chip: 'text-emerald-200 bg-emerald-500/20 border-emerald-400/40',
        label: 'Success',
    },
    warning: {
        accent: 'bg-amber-400',
        chip: 'text-amber-100 bg-amber-500/20 border-amber-400/40',
        label: 'Warning',
    },
    error: {
        accent: 'bg-rose-400',
        chip: 'text-rose-100 bg-rose-500/20 border-rose-400/40',
        label: 'Error',
    },
}

type ToastItemProps = {
    toast: ToastMessage
    onDismiss: (id: string) => void
}

const ToastItem = ({ toast, onDismiss }: ToastItemProps) => {
    const styles = VARIANT_STYLES[toast.variant]
    const role = toast.variant === 'success' ? 'status' : 'alert'

    return (
        <div
            role={role}
            className="pointer-events-auto flex gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 shadow-xl shadow-black/40 backdrop-blur animate-[toast-in_240ms_ease-out]"
        >
            <div className={`mt-1 h-8 w-1 rounded-full ${styles.accent}`} />
            <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                    <span className={`rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-widest ${styles.chip}`}>
                        {styles.label}
                    </span>
                    <button
                        type="button"
                        onClick={() => onDismiss(toast.id)}
                        className="text-xs uppercase tracking-widest text-slate-400 transition hover:text-slate-100"
                        aria-label="Close notification"
                    >
                        Close
                    </button>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-100/90">{toast.message}</p>
            </div>
        </div>
    )
}

export default ToastItem
