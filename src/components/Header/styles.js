import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: ${colors.light};
  margin-bottom: 30px;

  img {
    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid ${colors.lightgrey};
  }
`;

export const Nav = styled.nav`
  list-style: none;
  flex-grow: 1;

  li {
    display: inline-block;
    & + li {
      margin-left: 20px;
    }

    a {
      color: ${colors.grey};
    }
  }
`;

export const SignOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  strong,
  button {
    font-size: 14px;
  }

  strong {
    color: ${colors.darkgrey};
  }

  button {
    color: ${colors.primary};
    border: 0;
    background: none;
    margin-top: 4px;
  }
`;
