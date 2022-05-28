import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: #2a363b;

  &.active {
    color: #2196f3;
  }
`;
