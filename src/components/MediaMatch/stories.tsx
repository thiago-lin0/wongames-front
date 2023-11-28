import { Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop = () => (
  <MediaMatch $greaterThan="medium">Only on Destop</MediaMatch>
)

export const Mobile = () => (
  <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
)
