import styled from 'styled-components';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  background-color: transparent;
  z-index: 1;

  @media only screen and (max-width: 1000px) {
    background-color: #191414;
    padding: 0px 30px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const NavLogo = styled.div`
  position: relative;
  float: left;
  text-decoration: none;
  z-index: 1;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  margin-right: -20px;
  align-items: center;
  cursor: pointer;
  flex: 1;
  justify-content: flex-end;
`;

export const NavItem = styled.div`
  margin-right: 30px;
  padding: 9px 0;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  text-align: left;
  letter-spacing: 0;
  text-decoration: none;
  text-transform: none;

  &:hover {
    color: #1db954;
  }
`;

export const NavLink = styled.a`
  color: #333;
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 45%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? '-11%' : '-120%')};
    background-color: #191414;
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }

  @media only screen and (min-width: 1000px) {
    margin-right: 30px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    color: #e38b06;
    transform: translateY(-3rem);
  }
  &:active {
    transform: translateY(3rem);
    color: #e38b06;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
