var s=Object.defineProperty;var n=(o,t)=>s(o,"name",{value:t,configurable:!0});import{d as r,B as i,a}from"./index.d8d6206e.js";import{a as p,j as e}from"./jsx-runtime.81519524.js";import{ao as c}from"./iframe.4dfda87e.js";import"./index.7783025d.js";import"./index.1d7e57c4.js";const T={parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api'
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
`,locationsMap:{primary:{startLoc:{col:42,line:29},endLoc:{col:1,line:45},startBody:{col:42,line:29},endBody:{col:1,line:45}}}}},title:"Alert/Toast",component:r,args:{open:!1,duration:3e3,title:"Notification",description:"This is a notification"},argTypes:{open:{control:"boolean"},duration:{control:{type:"range",min:1e3,max:5e3,step:1e3}},title:{control:{type:"text"}},description:{control:{type:"text"}}}},x=n(o=>{const[,t]=c();return p(i,{children:[e(a,{onClick:()=>t({open:!0}),children:"Open Toast"}),e(r,{...o,open:o.open,title:o.title,description:o.description,onToggle:()=>t({open:!o.open})})]})},"Primary"),f=["Primary"];export{x as Primary,f as __namedExportsOrder,T as default};
//# sourceMappingURL=Toast.stories.4e651736.js.map
