import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;

    h1 {
      flex-grow: 1;
    }
  }
`;

export const FormInput = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 30px;
  border-radius: 4px;

  label {
    color: #444;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 45px;
    line-height: 45px;
    margin-top: 8px;
    border: 1px solid #ddd;
    padding-left: 16px;
    border-radius: 4px;

    & + span {
      color: #ee4d64;
      font-size: 12px;
      font-weight: normal;
    }

    &::placeholder {
      color: #999;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;

    label {
      & + label {
        margin-left: 10px;
      }
    }
  }
`;
