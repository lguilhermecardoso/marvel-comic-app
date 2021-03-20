import styled from 'styled-components'

export const ContainerHeader = styled.header`
  background: var(--dark-grey);
  padding: 0 0.5rem;
`
export const Container = styled.div`
  main {
    padding: 1rem 0.5rem;
  }
`
export const Header = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 0rem 1rem;

  display: flex;
  align-items: center;

  justify-content: space-between;

  input {
    max-width: 50%;
  }

  img {
    width: 130px;
  }
`

export const InformationApp = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`

export const Content = styled.div`
  main {
    max-width: 1120px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem; 
    grid-row-gap: 1rem;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
`