import styled from 'styled-components'
export const Container = styled.div`

  .close_button {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    cursor: pointer;
  }

  .modal_content {
    display: flex;
    img {
      width: 110px;
      margin-right: 0.8rem;
    }
  }
`

export const ModalTitle = styled.h1`
  font-size: 18px;
  line-height: 21px;
`
export const ModalSubTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`
export const ModalResumeHq = styled.div`
  margin-top: 1rem;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`