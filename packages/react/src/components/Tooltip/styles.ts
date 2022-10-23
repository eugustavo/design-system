import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const TooltipContent = styled(Tooltip.Content, {
  sideOffset: 6,
  backgroundColor: '$gray900',

  padding: '$2 $4',
  borderRadius: '$sm',

  color: '$gray100',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',

  fill: '$gray900',
})
