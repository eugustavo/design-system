var p=Object.defineProperty;var l=(o,r)=>p(o,"name",{value:r,configurable:!0});import{I as d,r as u,e as c,B as h}from"./index.d8d6206e.js";import{a as i,F as t,j as n}from"./jsx-runtime.81519524.js";import{r as f}from"./index.7783025d.js";import{ao as y}from"./iframe.4dfda87e.js";import"./index.1d7e57c4.js";var e=new Map;e.set("bold",function(o){return i(t,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("polyline",{points:"120 124 128 124 128 176 136 176",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("circle",{cx:"126",cy:"84",r:"16"})]})});e.set("duotone",function(o){return i(t,{children:[n("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("circle",{cx:"126",cy:"84",r:"12"})]})});e.set("fill",function(){return n(t,{children:n("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"})})});e.set("light",function(o){return i(t,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("circle",{cx:"126",cy:"84",r:"10"})]})});e.set("thin",function(o){return i(t,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("circle",{cx:"126",cy:"84",r:"8"})]})});e.set("regular",function(o){return i(t,{children:[n("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("polyline",{points:"120 120 128 120 128 176 136 176",fill:"none",stroke:o,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("circle",{cx:"126",cy:"84",r:"12"})]})});var k=l(function(r,s){return u(r,s,e)},"renderPath"),a=f.exports.forwardRef(function(o,r){return n(d,{...Object.assign({ref:r},o,{renderPath:k})})});a.displayName="Info";const m=a,W={parameters:{storySource:{source:`import { useArgs } from '@storybook/client-api'
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
`,locationsMap:{primary:{startLoc:{col:44,line:36},endLoc:{col:1,line:48},startBody:{col:44,line:36},endBody:{col:1,line:48}}}}},title:"Popover/Tooltip",component:c,args:{open:!1,delayDuration:300,children:n(h,{children:n(m,{size:24,color:"#fff"})}),tooltipShow:"Info text"},argTypes:{open:{control:"boolean"},delayDuration:{control:{type:"range",min:0,max:1e3,step:10}},tooltipShow:{control:{type:"text"}},children:{control:{type:null}}}},S=l(o=>{const[,r]=y();return n(c,{...o,onOpenChange:s=>r({open:s}),tooltipShow:o.tooltipShow,children:o.children})},"Primary"),w=["Primary"];export{S as Primary,w as __namedExportsOrder,W as default};
//# sourceMappingURL=Tooltip.stories.6a3c9636.js.map
