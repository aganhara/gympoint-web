import { darken } from 'polished';
import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.light};
  border-radius: 4px;
  padding: 50px 30px;
  width: 360px;

  img {
    display: block;
    margin: 0 auto 35px;
  }

  label {
    font-weight: bold;
    font-size: 16px;
    color: ${colors.darkgrey};
  }

  input {
    display: block;
    height: 45px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${colors.lightgrey};
    font-size: 16px;
    color: ${colors.grey};
    padding-left: 15px;
    margin: 8px 0 20px;
  }

  button {
    width: 100%;
    height: 45px;
    border: 0;
    border-radius: 4px;
    background: ${colors.primary};
    color: ${colors.light};
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${darken(0.05, colors.primary)};
    }
  }
`;
