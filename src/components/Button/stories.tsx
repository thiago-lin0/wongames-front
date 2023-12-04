import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {}
Default.args = {
  children: 'Buy now'
}
export const WithIcon: StoryObj<ButtonProps> = {}
WithIcon.args = {
  $size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: StoryObj<ButtonProps> = {}
asLink.args = {
  $size: 'small',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
