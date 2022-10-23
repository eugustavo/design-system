import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  open: boolean
  title: string
  description: string
  onToggle: () => void
}

export function Toast({
  open,
  onToggle,
  title,
  description,
  ...props
}: ToastProps) {
  return (
    <ToastProvider>
      <ToastContainer open={open} onOpenChange={onToggle} {...props}>
        <ToastTitle>
          <Text size="lg">{title}</Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>

        <ToastClose onClick={onToggle}>
          <X />
        </ToastClose>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
