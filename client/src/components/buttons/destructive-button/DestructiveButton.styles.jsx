import styled from "styled-components";

export const DestructiveButtonContainer = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.errorRed};
  padding: 0.8rem 1rem;
  border-radius: 5px;
  min-width: 150px;
  width: 200px;
  max-width: auto;
  max-height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: bolder;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.errorRed};
  -webkit-box-shadow: 0px 0px 1px;
  box-shadow: 0px 0px 1px;
  -webkit-transform: all 2s esase;
  -ms-transform: all 2s esase;
  transform: all 2s esase;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:hover {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-box-shadow: 0px 7px 1px ${({ theme }) => theme.colors.peach};
    box-shadow: 0px 7px 1px ${({ theme }) => theme.colors.peach1};
    border: 1px solid ${({ theme }) => theme.colors.peach};
  }

  &:active {
    -webkit-transform: translateY(10px);
    -ms-transform: translateY(10px);
    transform: translateY(10px);
    -webkit-box-shadow: 0px 0px 1px;
    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.errorRed};
  }
`;