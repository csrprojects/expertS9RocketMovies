import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 15rem;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.WHITE};

border: none;
resize: none;
margin-bottom: 0.8rem;
border-radius: 1rem;
padding: 1.6rem;

&::placeholder {
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
}
`;