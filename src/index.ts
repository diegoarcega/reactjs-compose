import React from 'react'

interface ComponentsType {
  component: React.ElementType
  props?:  { [name: string]: any }
}
interface Props {
  components: ComponentsType[]
  children?: any
}

function Compose({ components, children }: Props) {
  let ComponentWithWrappers = children

  const loopStart = components.length - 1

  for (let i = loopStart; i >= 0; i--) {
    ComponentWithWrappers = React.createElement(components[i].component, components[i].props, ComponentWithWrappers)
  }

  return ComponentWithWrappers
}

export default Compose
