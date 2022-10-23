import { useArgs } from '@storybook/client-api'
import type { Meta, Story } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@gustavosouza/react'

export default {
  title: 'Alert/Toast',
  component: Toast,
  args: {
    open: false,
    duration: 3000,
    title: 'Notification',
    description: 'This is a notification',
  },
  argTypes: {
    open: { control: 'boolean' },
    duration: {
      control: {
        type: 'range',
        min: 1000,
        max: 5000,
        step: 1000,
      },
    },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
} as Meta<ToastProps>

export const Primary: Story<ToastProps> = (args) => {
  const [, updateArgs] = useArgs()

  return (
    <Box>
      <Button onClick={() => updateArgs({ open: true })}>Open Toast</Button>

      <Toast
        {...args}
        open={args.open}
        title={args.title}
        description={args.description}
        onToggle={() => updateArgs({ open: !args.open })}
      />
    </Box>
  )
}
