import styled from 'styled-components';

export const Title = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #444444;
  text-align: left;
  display: block;
`;

export const Subtitle = styled(Title)`
  margin-bottom: 10px;
`;

export const Question = styled.div`
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 16px;
  color: #666666;
  line-height: 26px;
  text-align: left;
  margin-bottom: 10px;
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    width: 100%;
  }
`;
