import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  delayDuration?: number
  skipDelayDuration?: number
  tooltipShow?: string
}

export function Tooltip({
  children,
  delayDuration,
  tooltipShow,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer delayDuration={delayDuration} {...props}>
        <TooltipTrigger>{children}</TooltipTrigger>

        <TooltipContent>
          <TooltipArrow />

          <Text size="sm">{tooltipShow}</Text>
        </TooltipContent>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
