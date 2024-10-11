import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Panel = styled.div`
  flex: 1;
`
/*
  Usage:
  <SplitScreen Left={LeftComponent} Right={RightComponent} />

  LeftComponent and RightComponent are components that will be rendered 
  in the left and right panels respectively.

  The SplitScreen component is a layout component that takes 
  two components
*/
export const SplitScreen = ({Left, Right}) => {
  return (
    <Container>
      <Panel>
        <Left />
      </Panel>
      <Panel>
        <Right />
      </Panel>
    </Container>
  )
}
