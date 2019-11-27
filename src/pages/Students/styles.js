import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;

    h1 {
      flex-grow: 1;
    }

    div {
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
        margin-right: 16px;
        font-weight: bold;
        background: ${colors.primary};
        color: ${colors.light};

        svg {
          margin-right: 5px;
        }
      }

      input {
        height: 36px;
        padding: 10px 0;
        border: 1px solid ${colors.lightgrey};
        color: ${colors.darkgrey}

        &::placeholder {
          color: ${colors.grey};
        }
      }
    }
  }
`;
