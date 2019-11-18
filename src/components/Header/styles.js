import styled from "styled-components"
import { Link } from "gatsby"
import { theme } from "../../styles/theme"

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: all 1s;
  width: 100%;
  z-index: 1;
  max-width: 100%;

  svg {
    transition: all 1.5s;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  padding: 20px;
  width: 100%;
`

export const Logo = styled.img``

export const ToggleInput = styled.input.attrs({
  id: "hamburger",
  type: "checkbox",
})`
  display: none;

  @media (max-width: ${theme.mobile}) {
    &:checked + label {
      background: none;

      &::after,
      &::before {
        top: 0;
      }

      &::after {
        transform: rotate(45deg);
      }

      &::before {
        transform: rotate(-45deg);
      }
    }
    &:checked + label + ul {
      height: calc(100vh - 84px);
      justify-content: center;
    }
  }
`

export const Toggle = styled.label.attrs({
  htmlFor: "hamburger",
})`
  display: none;

  @media (max-width: ${theme.mobile}) {
    background: ${theme.white};
    display: block;
    height: 3px;
    margin-right: 30px;
    position: relative;
    width: 20px;

    &::after,
    &::before {
      background: ${theme.white};
      content: "";
      height: 3px;
      position: absolute;
      top: 6px;
      transition: all 0.5s ease-in-out;
      width: 20px;
    }

    &::before {
      top: -6px;
    }
  }
`

export const NavLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${theme.mobile}) {
    background-color: rgba(0, 42, 60, 0.95);
    flex-direction: column;
    height: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 84px;
    transition: all 0.5s ease-in-out;
    width: calc(100%);
    text-align: center;
  }
`

export const NavLinksItem = styled.li`
  margin: 8px 16px;

  @media (max-width: ${theme.mobile}) {
    margin: 24px 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const NavExternaLink = styled.a`
  background: ${theme.white};
  border-radius: 20px;
  color: ${theme.daintree};
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 1s;
`

export const NavLinksLink = styled(Link)`
  color: inherit;
  font-size: 14px;
  text-decoration: none;
  transition: all 1s;
`
export const NavLinksLinkEspecial = styled(NavLinksLink)`
  background: ${theme.white};
  border-radius: 20px;
  color: ${theme.daintree};
  font-weight: 400;
  padding: 10px 20px;
`
