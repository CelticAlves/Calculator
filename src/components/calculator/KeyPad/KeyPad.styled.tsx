import styled from 'styled-components';

export const KeyPadStyles = styled('div')`
  .grid-numbers {
    display: grid;
    /* grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 100px); */
    grid-template-areas:
      'c op per dev'
      '7 8 9 mul'
      '4 5 6 min'
      '1 2 3 plus'
      '0 0 dot equ';
    gap: 10px;
    .numbers {
      cursor: pointer;
      aspect-ratio: 1;
      color: white;
      background: red;
      &.one {
        grid-area: '1';
      }
      &.two {
        grid-area: '2';
      }
      &.three {
        grid-area: '3';
      }
      &.four {
        grid-area: '4';
      }
      &.five {
        grid-area: '5';
      }
      &.six {
        grid-area: '6';
      }
      &.seven {
        grid-area: '7';
      }
      &.eight {
        grid-area: '8';
      }
      &.nine {
        grid-area: '9';
      }
      &.zero {
        grid-area: '0';
      }
    }
  }
  .grid-operators {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 100px);
    gap: 10px;
    .operator {
      cursor: pointer;
      background: orange;
      font-size: 50px;
    }
  }
  background: papayawhip;
`;
