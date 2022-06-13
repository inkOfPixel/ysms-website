import React from "react";
import styled, { useTheme } from "styled-components";
import ButtonLink from "./ButtonLink";
import DotGrid from "./DotGrid";
import Phone from "./Phone";
import Wrapper from "./Wrapper";

type HeroType = {
  className?: string;
};

const Hero = ({ className }: HeroType) => {
  const theme = useTheme();
  return (
    <Container className={className}>
      <Wrapper>
        <Texts>
          <Title>SMS marketing app to boost your Shopify store</Title>
          <Subtitle>
            Create and manage your SMS marketing campaign. <br />
            Don't just send the classic boring emails
          </Subtitle>
          <ButtonLink href="https://apps.shopify.com/ysms">
            Get started
          </ButtonLink>
        </Texts>
        <Illustration>
          <Circle></Circle>
          <DotGrid
            width={7}
            height={7}
            space={44}
            radius={7}
            // @ts-ignore
            fill={theme.colors.green}
          ></DotGrid>
          <Phone></Phone>
        </Illustration>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  ${Wrapper} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Texts = styled.div`
  flex: 0 0 50%;
  margin-top: 100px;
  @media (max-width: 760px) {
    flex: 0 0 100%;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  line-height: 1em;
  padding-bottom: 20px;
  @media (max-width: 1000px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
  }
  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  padding-bottom: 40px;
  line-height: 1.2em;
  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

const Illustration = styled.div`
  flex: 0 0 50%;
  position: relative;
  height: 740px;
  @media (max-width: 760px) {
    flex: 0 0 100%;
    height: 640px;
  }
  @media (max-width: 640px) {
    margin-top: 40px;
  }
  ${Phone} {
    position: absolute;
    transform: rotate(10deg);
    right: 140px;
    top: 20px;
    @media (max-width: 1000px) {
      transform: rotate(0deg);
      right: 80px;
    }
    @media (max-width: 900px) {
      transform: scale(0.9);
      right: 40px;
    }
    @media (max-width: 760px) {
      transform: scale(0.9) rotate(70deg);
      right: 30%;
    }
    @media (max-width: 640px) {
      transform: scale(0.9) rotate(30deg);
      right: 25%;
    }
    @media (max-width: 400px) {
      transform: scale(0.9) rotate(20deg);
    }
  }
  ${DotGrid} {
    position: absolute;
    right: 0;
    bottom: 100px;
  }
`;

const Circle = styled.div`
  position: absolute;
  left: 50px;
  width: 740px;
  height: 740px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  @media (max-width: 760px) {
    width: 640px;
    height: 640px;
    left: auto;
    right: -100px;
  }
`;

export default styled(Hero)``;
