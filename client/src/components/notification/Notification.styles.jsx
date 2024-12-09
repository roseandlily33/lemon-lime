import styled from "styled-components";

export const NotificationContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const NotificationMessageSuccess = styled.h3`
  color: ${({ theme }) => theme.colors.successGreen};
  font-weight: 700;
  font-size: 2rem;
`;

export const NotificationMessageError = styled.h3`
  color: ${({ theme }) => theme.colors.errorRed};
  font-weight: 700;
  font-size: 2rem;
`;
