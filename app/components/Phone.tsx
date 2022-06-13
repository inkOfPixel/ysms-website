import React from "react";
import styled from "styled-components";

type PhoneProps = {
  className?: string;
};

function Phone({ className }: PhoneProps) {
  return (
    <Container className={className}>
      <Wrapper>
        <Navigation>
          <Back></Back>
          <NavigationTitle>Store Name</NavigationTitle>
        </Navigation>
        <Message></Message>
        <Input>Text Message</Input>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 280px;
  height: 580px;
  border-radius: 40px;
  padding: 20px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Navigation = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Back = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  height: 10px;
  width: 10px;
  border-left: 3px solid ${({ theme }) => theme.colors.white};
  border-top: 3px solid ${({ theme }) => theme.colors.white};
  transform: translateY(-50%) rotate(-45deg);
`;
const NavigationTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

const Message = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  width: 100%;
  margin-top: 40px;
  padding: 24px 20px;
  border-radius: 20px 20px 20px 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  &::after {
    content: "Today only use code WELCOME10 for 10% on entire website!";
    display: block;
    animation: changeContent 50s linear infinite alternate;
  }

  @keyframes changeContent {
    0% {
      content: "Today only use code WELCOME10 for 10% on entire website!";
    }
    25% {
      content: "You might like to see our summer collection. Browse our new arrivals!";
    }

    50% {
      content: "Reminder: From 12th to 15th you've accesse to VIP discount with code VIP20. Enjoy 20% off!";
    }
    75% {
      content: "2x1 + Free Shipping on Valentine's day! ";
    }
    100% {
      content: "Today only use code WELCOME10 for 10% on entire website!";
    }
  }
`;

const Input = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 15px;
  width: 100%;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

export default styled(Phone)``;
