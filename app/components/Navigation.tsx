import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "~/helpers/link-helper";
import ButtonLink from "./ButtonLink";
import { Drawer } from "./Drawer";
import Icon from "./Icon";
import Wrapper from "./Wrapper";

type NavigationProps = {
  className?: string;
};

function Navigation({ className }: NavigationProps) {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen((isOpen) => !isOpen);
  };
  return (
    <Container className={className}>
      <Desktop>
        <Wrapper>
          <Link to="/">
            <Logo>
              <StyledIcon></StyledIcon>
              <Wordmark>YSMS</Wordmark>
            </Logo>
          </Link>
          <NavigationList></NavigationList>
        </Wrapper>
      </Desktop>
      <Mobile>
        <Wrapper>
          <Logo>
            <StyledIcon></StyledIcon>
            <Wordmark>YSMS</Wordmark>
          </Logo>
          <OpenDrawerIcon onClick={handleClose}>
            <span></span>
          </OpenDrawerIcon>
        </Wrapper>
        <Drawer handleClose={handleClose} position="right" isOpen={isOpen}>
          <NavigationList></NavigationList>
        </Drawer>
      </Mobile>
    </Container>
  );
}

function NavigationList() {
  return (
    <List>
      <ListItem>
        <Link to="/">
          <LinkTitle>Features</LinkTitle>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/pricing">
          <LinkTitle>Pricing</LinkTitle>
        </Link>
      </ListItem>
      <ListItem>
        <ButtonLink href="https://apps.shopify.com/ysms">
          Get started
        </ButtonLink>
      </ListItem>
    </List>
  );
}

const Container = styled.div`
  width: 100%;
  font-size: 18px;

  ${Wrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Desktop = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: 760px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 760px) {
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
    position: fixed;
    top: 0;
    z-index: 10;
    display: block;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled(Icon)`
  width: 60px;
  fill: ${({ theme }) => theme.colors.green};
  display: block;
`;

const Wordmark = styled.div`
  padding-left: 10px;
  font-weight: 700;
  font-size: 24px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 60px 30px;
  }
`;

const ListItem = styled.li`
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 760px) {
    margin-left: 0;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 40px;
    font-size: 20px;
  }
`;

const LinkTitle = styled.span``;

const OpenDrawerIcon = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  span {
    height: 2px;
    width: 60%;
    background-color: rgba(0, 0, 0, 0.8);
    &::after,
    &::before {
      content: " ";
      height: 2px;
      width: 60%;
      background-color: rgba(0, 0, 0, 0.8);
      position: absolute;
      transform-origin: center;
      transition: 0.3s all;
      &:hover {
        background-color: rgba(0, 0, 0, 1);
      }
    }
    &::before {
      top: 20%;
    }
    &::after {
      bottom: 20%;
    }
  }
`;

export default styled(Navigation)``;
