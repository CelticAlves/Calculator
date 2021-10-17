import styled from 'styled-components';

export const CalculatorStyles = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .grid-wrapper {
    background-color: ${(props) => props.theme.body};
    display: grid;
    grid-template-columns: repeat(4, 65px);
    grid-template-rows: repeat(6, 65px);
    gap: 10px;
    grid-template-areas:
      'disp disp disp disp'
      'clear sign percent division'
      'seven eight nine multiply'
      'four five six minus'
      'one two three plus'
      'zero zero dot equals';

    .display {
      grid-area: disp;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 4rem;
      padding-right: 15px;
      color: ${(props) => props.theme.fonts.colorPrimary};
    }

    .key {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
      aspect-ratio: 1;
      border-radius: 50%;
      &:hover {
        opacity: 0.9;
      }
      &.functions {
        font-size: 2rem;
        color: ${(props) => props.theme.fonts.colorSecondary};
        background-color: ${(props) => props.theme.buttons.colorLightGray};
      }
      &.operator {
        color: ${(props) => props.theme.fonts.colorPrimary};
        background-color: ${(props) => props.theme.buttons.colorOrange};
      }
      &.numpad {
        color: ${(props) => props.theme.fonts.colorPrimary};
        background-color: ${(props) => props.theme.buttons.colorGray};
        &.one {
          grid-area: one;
        }
        &.two {
          grid-area: two;
        }
        &.three {
          grid-area: three;
        }
        &.four {
          grid-area: four;
        }
        &.five {
          grid-area: five;
        }
        &.six {
          grid-area: six;
        }
        &.seven {
          grid-area: seven;
        }
        &.eight {
          grid-area: eight;
        }
        &.nine {
          grid-area: nine;
        }
        &.zero {
          grid-area: zero;
          border-radius: 100px;
          aspect-ratio: 0;
        }
        &.dot {
          grid-area: dot;
        }
        &.disabled {
          pointer-events: none;
          background-color: papayawhip;
          color: papayawhip;
        }
      }
    }

    @media (min-width: 400px) {
      grid-template-columns: repeat(4, 16vw);
      grid-template-rows: repeat(6, 16vw);
      .display {
        padding-right: 5vw;
        font-size: 16vw;
      }
      .key {
        font-size: 7vw;
        &.functions {
          font-size: 7vw;
        }
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 130px);
      grid-template-rows: repeat(6, 130px);
      .display {
        padding-right: 56px;
        font-size: 7rem;
      }
      .key {
        font-size: 4rem;
        &.functions {
          font-size: 4rem;
        }
      }
    }
    /*   generic landscape media query dont support all cases   */
    @media only screen and (min-device-width: 568px) and (max-device-width: 812px) and (orientation: landscape) {
      width: 580px;
      grid-template-columns: repeat(4, 23vw);
      grid-template-rows: repeat(6, 6vw);
      .display {
        font-size: 3rem;
      }
      .key {
        font-size: 2rem;
        aspect-ratio: 0;
        border-radius: 0;
        &.functions {
          font-size: 2rem;
        }
      }
    }
  }
`;
