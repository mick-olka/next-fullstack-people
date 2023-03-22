import styled from 'styled-components'

export const SGridPane = styled.div`
  margin: 1rem;
  display: grid;
  gap: 2rem;
  grid-auto-columns: min-content;
  /* grid-auto-columns: 100px; */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`
