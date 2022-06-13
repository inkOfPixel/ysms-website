import React from "react";
import styled, { useTheme } from "styled-components";
import DotGrid from "./DotGrid";
import Wrapper from "./Wrapper";

type ValuePropositionsProps = {
  className?: string;
};

function ValuePropositions({ className }: ValuePropositionsProps) {
  const theme = useTheme();
  return (
    <Container className={className}>
      <Wrapper>
        <Title>Increase sales.</Title>
        <Title className="green">4x ROI Guaranteed.</Title>

        <Values>
          <Value>
            <DotGrid
              width={3}
              height={3}
              space={44}
              radius={7}
              // @ts-ignore
              fill={theme.colors.lightGreen}
            ></DotGrid>
            <ValueTitle>Open Rate</ValueTitle>
            <ValueNumber>98%</ValueNumber>
            <ValueDescription>
              Compared to just 20% of all emails, 3x people are reading your
              messages than emails.
            </ValueDescription>
          </Value>
          <Value>
            <DotGrid
              width={3}
              height={3}
              space={44}
              radius={7}
              // @ts-ignore
              fill={theme.colors.lightGreen}
            ></DotGrid>
            <ValueTitle>Higher CTR</ValueTitle>
            <ValueNumber>19%+</ValueNumber>
            <ValueDescription>
              While the click through rate for email marketing is at 3.2%
            </ValueDescription>
          </Value>
          <Value>
            <DotGrid
              width={3}
              height={3}
              space={44}
              radius={7}
              // @ts-ignore
              fill={theme.colors.lightGreen}
            ></DotGrid>
            <ValueTitle>It’s cheap</ValueTitle>
            <ValueNumber>4x ROI</ValueNumber>
            <ValueDescription>
              SMS campaign might seem expensive by looking at the price/SMS, but
              it has a higher ROI and less creation time than mail.
            </ValueDescription>
          </Value>
        </Values>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  ${Wrapper} {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  line-height: 1em;
  &.green {
    color: ${({ theme }) => theme.colors.green};
  }
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

const Values = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 20px 0;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  margin-top: 60px;
`;

const Value = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 0 33.33%;
  padding: 30px 30px;
  align-items: center;
  position: relative;

  @media (max-width: 960px) {
    flex: 0 0 50%;
  }
  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
  ${DotGrid} {
    position: absolute;
    z-index: -1;
    right: 25%;
    top: -15px;
    @media (max-width: 600px) {
      right: 35%;
    }
    @media (max-width: 400px) {
      right: 25%;
    }
  }
`;

const ValueTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2em;
`;
const ValueNumber = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.2em;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.green};
`;

const ValueDescription = styled.div`
  font-size: 24px;
  padding-bottom: 40px;
  line-height: 1.2em;
  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

export default styled(ValuePropositions)``;
