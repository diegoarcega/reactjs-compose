import React from 'react'

interface Props {
  components: React.ElementType[]
  children?: any
}

function Compose({ components, children }: Props) {
  let ComponentWithWrappers = children

  const loopStart = components.length - 1

  for (let i = loopStart; i >= 0; i--) {
    if (Array.isArray(components[i])) {
      // @ts-ignore
      ComponentWithWrappers = React.createElement(components[i][0], components[i][1], ComponentWithWrappers)
    } else {
      ComponentWithWrappers = React.createElement(components[i], null, ComponentWithWrappers)
    }
  }

  return ComponentWithWrappers
}

export default Compose
