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
        color: ${colors.darkgrey};

        &::placeholder {
          color: ${colors.grey};
        }
      }
    }
  }
`;

export const PlanList = styled.div`
  background: ${colors.light};
  margin-top: 32px;
  border-radius: 4px;
  padding: 30px;

  table {
    width: 100%;
    border-spacing: 0;

    thead {
      th {
        font-weight: bold;
        font-size: 16px;
        text-align: left;
        color: ${colors.darkgrey};
      }
    }

    tbody {
      tr {
        height: 54px;

        & + tr > td {
          border-top: 1px solid ${colors.lightgrey};
        }

        td {
          color: #666;

          &:last-of-type {
            text-align: right;
            max-width: 150px;
          }
        }
      }
    }
  }
`;

export const EditButton = styled.button`
  border: 0;
  background: none;
  margin-right: 24px;
  color: #4d85ee;
`;

export const RemoveButton = styled.button`
  border: 0;
  background: none;
  color: #de3b3b;
`;
