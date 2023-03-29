import styled from 'styled-components'

export const Pane = styled.div<{ color: string }>`
  padding: 1rem;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  box-shadow: 1px 0px 15px 15px ${({ color }) => color};
`

export const Field = styled.div`
  display: flex;
  width: 20rem;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
`
