import React from 'react'

type ComponentType = React.ElementType | [React.ElementType, { [name: string]: any }]
interface Props {
  components: Array<ComponentType>
  children?: any
}

function Compose({ components, children }: Props): React.ElementType {
  let ComponentWithWrappers = children

  const loopStart = components.length - 1

  for (let i = loopStart; i >= 0; i--) {
    const mycomponent: ComponentType = components[i]

    if (Array.isArray(mycomponent)) {
      ComponentWithWrappers = React.createElement(mycomponent[0], mycomponent[1], ComponentWithWrappers)
    } else {
      ComponentWithWrappers = React.createElement(mycomponent, null, ComponentWithWrappers)
    }
  }

  return ComponentWithWrappers
}

export default Compose
