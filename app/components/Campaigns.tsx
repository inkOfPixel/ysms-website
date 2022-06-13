import styled, { useTheme } from "styled-components";
import ButtonLink from "./ButtonLink";
import DotGrid from "./DotGrid";
import Wrapper from "./Wrapper";

type CampaignsProps = {
  className?: string;
};

function Campaigns({ className }: CampaignsProps) {
  const theme = useTheme();
  return (
    <Container className={className}>
      <Wrapper>
        <Texts>
          <Title>Highly specific SMS campaigns</Title>
          <Subtitle>
            Advanced filters to be able to create the most suitable audience for
            your campaign.
          </Subtitle>
          <ButtonLink href="https://apps.shopify.com/ysms">
            Get started
          </ButtonLink>
          <DotGrid
            width={7}
            height={7}
            space={44}
            radius={7}
            // @ts-ignore
            fill={theme.colors.lightGreen}
          ></DotGrid>
        </Texts>
        <Illustration>
          <Cell className="width100 padding5">
            <Cell className="height60 width100 backgroundGray padding20 arrow">
              Money spent
            </Cell>
          </Cell>

          <Cell className="width100">
            <Cell className="height60 width50 padding5">
              <Cell className="width100 backgroundGray padding20 arrow">
                Greater than
              </Cell>
            </Cell>
            <Cell className="height60 width50 padding5">
              <Cell className="width100 backgroundGray padding20">$500</Cell>
            </Cell>
          </Cell>

          <Cell className="padding5">
            <Cell className="height60 width40 border1Dark padding20 arrow">
              And
            </Cell>
          </Cell>

          <Cell className="width100 padding5">
            <Cell className="height60 width100 backgroundGray padding20 arrow">
              Numbers of orders
            </Cell>
          </Cell>

          <Cell className="width100">
            <Cell className="height60 width50 padding5">
              <Cell className="width100 backgroundGray padding20 arrow">
                Greater than
              </Cell>
            </Cell>
            <Cell className="height60 width50 padding5">
              <Cell className="width100 backgroundGray padding20">3</Cell>
            </Cell>
          </Cell>

          <Cell className="padding5">
            <Cell className="height60 width40 border1Dark padding20 arrow">
              And
            </Cell>
          </Cell>

          <Cell className="width100 padding5 disabled">
            <Cell className="height60 width100 backgroundGray padding20 arrow">
              Select filter
            </Cell>
          </Cell>
        </Illustration>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  padding-bottom: 80px;
  ${Wrapper} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Texts = styled.div`
  flex: 0 0 50%;
  margin-top: 100px;
  position: relative;

  @media (max-width: 760px) {
    flex: 0 0 100%;
  }
  ${DotGrid} {
    position: absolute;
    right: 0;
    top: -30px;
    z-index: 0;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  line-height: 1em;
  padding-bottom: 20px;
  z-index: 1;
  position: relative;
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
  z-index: 1;
  position: relative;
  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

const Illustration = styled.div`
  flex: 0 0 50%;
  position: relative;
  padding-left: 60px;

  @media (max-width: 760px) {
    flex: 0 0 100%;
    padding-left: 0;
    margin-top: 40px;
  }
`;

const Cell = styled.div`
  display: flex;
  position: relative;
  font-size: 14px;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
  &.height60 {
    flex: 0 0 100%;
  }
  &.width100 {
    flex: 0 0 100%;
  }
  &.width50 {
    flex: 0 0 50%;
  }
  &.width40 {
    flex: 0 0 40%;
  }
  &.width25 {
    flex: 0 0 25%;
  }
  &.backgroundGray {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &.border1Dark {
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  }
  &.padding20 {
    padding: 20px;
  }
  &.padding5 {
    padding: 5px;
  }
  &.disabled {
    opacity: 0.8;
  }
  &.arrow:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    height: 10px;
    width: 10px;
    border-left: 3px solid ${({ theme }) => theme.colors.darkBlue};
    border-bottom: 3px solid ${({ theme }) => theme.colors.darkBlue};
    transform: translateY(-50%) rotate(-45deg);
  }
`;

export default styled(Campaigns)``;
