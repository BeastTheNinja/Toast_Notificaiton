import ToastItem from './ToastItem'
import type { ToastMessage, ToastPosition } from './types'

const POSITION_CLASSES: Record<ToastPosition, string> = {
  'top-right': 'top-5 right-5 items-end',
  'top-left': 'top-5 left-5 items-start',
  'bottom-right': 'bottom-5 right-5 items-end',
  'bottom-left': 'bottom-5 left-5 items-start',
}

const POSITIONS: ToastPosition[] = ['top-right', 'top-left', 'bottom-right', 'bottom-left']

type ToastViewportProps = {
  toasts: ToastMessage[]
  onDismiss: (id: string) => void
}

const ToastViewport = ({ toasts, onDismiss }: ToastViewportProps) => {
  return (
    <>
      {POSITIONS.map((position) => {
        const items = toasts.filter((toast) => toast.position === position)

        if (items.length === 0) {
          return null
        }

        const direction = position.startsWith('bottom') ? 'flex-col-reverse' : 'flex-col'

        return (
          <div
            key={position}
            className={`fixed z-50 flex ${direction} gap-3 w-[min(22rem,92vw)] pointer-events-none ${POSITION_CLASSES[position]}`}
          >
            {items.map((toast) => (
              <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
            ))}
          </div>
        )
      })}
    </>
  )
}

export default ToastViewport
