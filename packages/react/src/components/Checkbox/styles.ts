import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translatey(-100%)',
    opacity: 0,
  },
  to: {
    transform: 'translatey(0)',
    opacity: 100,
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translatey(0)',
    opacity: 100,
  },
  to: {
    transform: 'translatey(-100%)',
    opacity: 0,
  },
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',

  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$green300',
  },

  '&:focus': {
    border: '2px solid $green300',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
