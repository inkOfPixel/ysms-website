import { Link } from "@remix-run/react";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Wrapper from "./Wrapper";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Logo>
            <StyledIcon></StyledIcon>
            <Wordmark>YSMS</Wordmark>
          </Logo>
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
              <Link to="/privacy">
                <LinkTitle>Privacy</LinkTitle>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/terms-and-conditions">
                <LinkTitle>Terms and Conditions</LinkTitle>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/gdpr-compliant">
                <LinkTitle>GDPR Compliant</LinkTitle>
              </Link>
            </ListItem>
          </List>
        </Navigation>
        <BottomLine>
          © 2020 inkOfPixel Srl. All rights reserved.
          <br />
          <br />
          Capital €10200 i.v. • Piazza Castello n. 26 - 20121 Milano • VAT
          Number 09287730965 • REA MI - 2081233
        </BottomLine>
      </Wrapper>
    </Container>
  );
}

const Container = styled.footer`
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 40px;
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
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const ListItem = styled.li`
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    margin: 10px;
  }
`;

const LinkTitle = styled.span``;

const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
  a {
    display: flex;
    margin-top: 10px;
  }
`;
