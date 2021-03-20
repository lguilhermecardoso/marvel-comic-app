import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F3F3F3;
    --dark-grey: #DCDCDC;
    --light-grey: #C3C1C1;
    --blue: #10709E;
    --green: #009E22;
  }
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.1rem;
    border-radius: 0.25rem;
    border: 1px solid #52000A;
    background: #F3F3F3;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--light-grey);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    cursor: pointer;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn {
    font-size: 1.3rem;
    font-weight: 700;
    color: #F3F3F3;
    border: none;
    padding: 0.8rem 3rem;
    border-radius: 0.4rem;

    &:focus {
      outline: none;
    }
  }

  .btn-sm {
    padding: 0.3rem 1rem;
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  .btn-light {
    background: #f8f9fa;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    color: #212529;

    transition: background-color 0.3s;
    &:hover {
      background: ${darken(0.12, '#f8f9fa')};
    }
  }

  .btn-primary {
    background: var(--blue);

    transition: background-color 0.3s;
    &:hover {
      background: ${darken(0.12, '#10709E')};
    }
  }

  .btn-secondary {
    background: var(--green);

    transition: background-color 0.3s;
    &:hover {
      background: ${darken(0.12, '#009E22')};
    }
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

    &:focus {
      outline: none;
    }
  }
  .responsive {
    width: 100%;
    height: auto;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`