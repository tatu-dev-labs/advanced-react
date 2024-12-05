import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Panel = styled.div`
  flex: ${props => props.flex};
`
/*
  # Usage:

  <SplitScreen Left={LeftComponent} Right={RightComponent} />

  LeftComponent and RightComponent are components that will be rendered 
  in the left and right panels respectively.

  The SplitScreen component is a layout component that takes 
  two components

  ## Enhancements

  We replace the Left and Right props with children prop and
  then destructure the children prop to get the Left and Right components.

  We also add leftWidth and rightWidth props to control the width of the 
  left and right panels and set default values for them.

  Now, for use the SplitScreen component, we can pass the Left and Right
  components as children to the SplitScreen component and set the width of
  the left and right panels using the leftWidth and rightWidth props.

  Example
  -------
  <SplitScreen leftWidth={1} rightWidth={3}>
    <LeftComponent title="Left" />
    <RightComponent title="Right" />
  </SplitScreen>
*/
export const SplitScreen = ({children, leftWidth = 1, rightWidth = 1}) => {
  const [Left, Right] = children

  return (
    <Container>
      <Panel flex={leftWidth}>
        {Left}
      </Panel>
      <Panel flex={rightWidth}>
        {Right}
      </Panel>
    </Container>
  )
}
