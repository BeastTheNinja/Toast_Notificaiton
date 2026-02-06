import { createContext } from "react"
import type { ToastOptions } from "./types"

type ToastContextValue = {
    showToast: (message: string, options?: ToastOptions) => void
    removeToast: (id: string) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)