import {useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import ToastViewport from './ToastViewport'
import type { ToastMessage, ToastOptions, ToastPosition, ToastVariant } from './types'
import { ToastContext } from './ToastContext'

const DEFAULT_OPTIONS = {
    variant: 'success' as ToastVariant,
    duration: 3200,
    position: 'top-right' as ToastPosition,
}


const createToastId = () => `toast-${Date.now()}-${Math.random().toString(16).slice(2)}`

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([])
    const timersRef = useRef(new Map<string, number>())

    const removeToast = useCallback((id: string) => {
        setToasts((current) => current.filter((toast) => toast.id !== id))

        const timeoutId = timersRef.current.get(id)
        if (timeoutId) {
            window.clearTimeout(timeoutId)
            timersRef.current.delete(id)
        }
    }, [])

    const showToast = useCallback(
        (message: string, options: ToastOptions = {}) => {
            const toast: ToastMessage = {
                id: createToastId(),
                message,
                variant: options.variant ?? DEFAULT_OPTIONS.variant,
                duration: options.duration ?? DEFAULT_OPTIONS.duration,
                position: options.position ?? DEFAULT_OPTIONS.position,
            }

            setToasts((current) => [toast, ...current])

            const timeoutId = window.setTimeout(() => removeToast(toast.id), toast.duration)
            timersRef.current.set(toast.id, timeoutId)
        },
        [removeToast],
    )

    useEffect(() => {
        return () => {
            timersRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
            timersRef.current.clear()
        }
    }, [])

    const value = useMemo(() => ({ showToast, removeToast }), [showToast, removeToast])

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastViewport toasts={toasts} onDismiss={removeToast} />
        </ToastContext.Provider>
    )
}
