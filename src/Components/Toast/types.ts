export type ToastVariant = 'success' | 'warning' | 'error'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export type ToastOptions = {
    variant?: ToastVariant
    duration?: number
    position?: ToastPosition
}

export type ToastMessage = {
    id: string
    message: string
    variant: ToastVariant
    duration: number
    position: ToastPosition
}
