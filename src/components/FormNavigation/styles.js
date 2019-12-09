import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  button,
  input {
    font-size: 14px;
    border-radius: 4px;
    border: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 142px;
    height: 36px;
    font-weight: bold;
    color: ${colors.light};
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, colors.lightgrey)};
    }

    &:last-of-type {
      background: ${colors.primary};
      margin-left: 16px;
      &:hover {
        background: ${darken(0.08, colors.primary)};
      }
    }

    svg {
      margin-right: 5px;
    }
  }

  input {
    height: 36px;
    padding: 10px 0;
    border: 1px solid ${colors.lightgrey};
    color: ${colors.darkgrey};

    &::placeholder {
      color: ${colors.grey};
    }
  }
`;
