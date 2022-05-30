import styled from '@emotion/styled';

export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 0.375rem 0.75rem;
  margin: 0 8px 10px 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  ::placeholder {
    color: #212529;
    opacity: 0.4;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  margin: 0 auto;
`;
