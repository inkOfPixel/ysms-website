import styled, { useTheme } from "styled-components";
import ButtonLink from "./ButtonLink";
import DotGrid from "./DotGrid";
import Wrapper from "./Wrapper";

type MessageProps = {
  className?: string;
};

const Message = ({ className }: MessageProps) => {
  const theme = useTheme();
  return (
    <Container className={className}>
      <Wrapper>
        <DotGrid
          width={7}
          height={7}
          space={44}
          radius={7}
          // @ts-ignore
          fill={theme.colors.darkBlue}
        ></DotGrid>
        <Bubble>
          <Title>Give your store a boost</Title>
          <Subtitle>
            With YSMS you pay only the text messages you send, if you are still
            in doubt take a look at our prices
          </Subtitle>
          <ButtonLink color="dark" href="https://apps.shopify.com/ysms">
            Get started
          </ButtonLink>
        </Bubble>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  padding-bottom: 120px;
  ${Wrapper} {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  ${DotGrid} {
    position: absolute;
    right: -95px;
    bottom: -95px;
    z-index: 0;
    @media (max-width: 1300px) {
      right: -8px;
    }
  }
`;

const Bubble = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  position: relative;
  z-index: 1;
  border-radius: 60px 60px 60px 0;
  padding: 100px 60px;
  width: 100%;
  @media (max-width: 760px) {
    padding: 60px 40px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  line-height: 1em;
  padding-bottom: 20px;
  z-index: 1;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

export default styled(Message)``;
