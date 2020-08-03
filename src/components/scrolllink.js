import React from 'react'
import { ScrollLink, ScrollElement } from 'react-scroll'

export const ScrollLinkTo = ScrollLink(props => (
  <a {...props}>{props.children}</a>
))

export const ScrollLinkElement = ScrollElement(props => {
  // to avoid React's warning not recognise the parentBings prop
  const { parentBindings, ...rest } = props
  return (
    <div {...rest} ref={el => (parentBindings.domNode = el)}>
      {props.children}
    </div>
  )
})
