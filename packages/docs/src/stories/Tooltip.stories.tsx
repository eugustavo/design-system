import { useArgs } from '@storybook/client-api'
import type { Meta, Story } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@gustavosouza/react'
import { Info } from 'phosphor-react'

export default {
  title: 'Popover/Tooltip',
  component: Tooltip,
  args: {
    open: false,
    delayDuration: 300,
    children: (
      <Box>
        <Info size={24} color="#fff" />
      </Box>
    ),
    tooltipShow: 'Info text',
  },
  argTypes: {
    open: { control: 'boolean' },
    delayDuration: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10,
      },
    },
    tooltipShow: { control: { type: 'text' } },
    children: {
      control: { type: null },
    },
  },
} as Meta<TooltipProps>

export const Primary: Story<TooltipProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <Tooltip
      {...args}
      onOpenChange={(open) => updateArgs({ open })}
      tooltipShow={args.tooltipShow}
    >
      {args.children}
    </Tooltip>
  )
}
