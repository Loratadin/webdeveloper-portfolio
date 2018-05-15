import styled from 'styled-components';
import media from '../../theme/media';

export const LimeButton = styled.button`
  cursor: pointer;
  animation: spin infinite 5s linear;
  right: 0;
  top:0;
  width: 60px;
  height: 60px;
  padding: 0;
  margin: 0;
  border: none;
  outline: inherit;
  & > img {
    width: 100%;
  }
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
`;