import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 0.3rem;

  .backGroundCover {
    width: 100%;
    max-height: 150px;
    border-radius: 0.3rem 0.3rem 0 0;
  }
`

export const Wrap = styled.div`
  position: relative;
  max-width: 500px;
  min-height: 230px;
  max-height: 230px;
  margin-left: auto;
  margin-right: auto;
`


export const Card = styled.div.attrs(props => ({
  selected: props.selected
}))`

  width: calc( 105% - 0.5rem );
  min-height: 0;
  
  ${({selected}) => {
    if (selected) {
     return css`
        border: 0.2rem solid #10709E;
        border-radius: 0.4rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.34));
      `}
    }
  }

  .header {
    cursor: pointer;
  }

  .title {
    &-text {
      white-space: nowrap; 
      width: 160px;
      overflow: hidden;
      text-overflow: ellipsis; 
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 0.3rem;
    }
  }
  .subtitle {
    &-text {
      white-space: nowrap; 
      width: 160px;
      overflow: hidden;
      text-overflow: ellipsis; 
      font-size: 14px;
      font-weight: bold;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
      
    .text {
      padding: 0.8rem 0;
    }
  }

  .card-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid #f0f0f0;
    align-items: center;
    margin-top: 0.3rem;

    & button {
      margin-top: 0.3rem;
    }
  }
`