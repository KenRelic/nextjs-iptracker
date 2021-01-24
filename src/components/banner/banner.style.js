import styled from "@emotion/styled";
const img = '/pattern-bg.png';
const arrow = '/icon-arrow.svg';


export const StyledBanner = styled('div')`
  width: 100%;
  background: url(${img});
  background-position:center;
  background-repeat:no-repeat;
  background-size: cover;
  padding: 2rem 1.5rem;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content:center;
  z-index: 2000;
  h1{
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
  }

  .container{
    width: 100%;
    display: block;

  }
  .search-wrapper{
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 2rem auto;
      input{
        height: 100%;
        width: 100%;
        background-color: #fff;
        padding: 1rem;
        border-radius:1rem 0 0 1rem;
        border: none;
        font-size: 15px;
        @media all and (min-width: 520px){
          width: 420px;
        }
    }

    button{
      height: 100%;
      width: 60px;
      border-radius: 0 1rem 1rem 0;
      border: none;
      background-color:#000;
      padding: 1rem;
      background-image:url(${arrow});
      background-repeat: no-repeat;
      background-position: center;
      outline: none;
      cursor:pointer;

      :hover{
        background-color:#222;
      }
    }

  
  }
  
  .result-section{
    background-color:#fff;
    box-shadow: 0 20px 30px #00000029;
    min-height: 150px;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    transform: translate(-50% 50%);
    margin: 0 auto -100px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow:hidden;
    
    .criteria{
      margin-bottom:2rem;
      .sub-title{
        color: #333;
        text-transform:uppercase;
        margin-bottom: 1rem;
        font-size: 1rem;
      }
      .result-value{
        font-weight: bold;
        font-size: 1.7rem;
        color: #000;
        text-overflow:ellipsis;

        @media all and (max-width: 916px){
          font-size: 1.5rem;
        }
        @media all and (max-width: 860px){
          font-size: 1.3rem;
        }
      }  
    }

    .error-message{
      width:100%;
      margin: 0 auto;
      text-align: center;

       .sub-title{        
        font-size: 2rem;
      }
      .result-value{       
        font-size: 1rem;      
      }
    }

    .separator{
        display: none;
        height: 80px;
        width: 3px;
        border-radius: 2px;
        background-color: #00000029;
        @media all and (min-width: 768px){
          display: inherit;
          margin: 0 2rem;
        }
      }
  }

@media all and (min-width: 768px){

  .result-section{
    flex-direction: row;
    justify-content:space-between;
    text-align: start;
    padding-bottom: 1rem;
  }

  .criteria{
    flex: 1;
  }
  
}

@media all and (min-width: 1080px){
  .result-section{
    width: 1080px;
  }
}

`