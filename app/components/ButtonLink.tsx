import styled from "styled-components";
import { Link } from "~/helpers/link-helper";

type ButtonLinkProps = {
  className?: string;
  children?: any;
  href: string;
  color?: "main" | "dark";
};

function ButtonLink({ children, className, color, href }: ButtonLinkProps) {
  return (
    <Container className={className} color={color}>
      {href.match("^https?://") ? (
        <a href={href}>
          <LinkTitle>{children}</LinkTitle>
        </a>
      ) : (
        <Link to={href}>
          <LinkTitle>{children}</LinkTitle>
        </Link>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) =>
    ({
      main: props.theme.colors.green,
      dark: props.theme.colors.darkBlue,
    }[props.color || "main"])};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  height: 50px;
  min-width: 160px;
  max-width: 200px;
  border-radius: 20px;
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: ${(props) =>
      ({
        main: props.theme.colors.greenHover,
        dark: props.theme.colors.darkBlueHover,
      }[props.color || "main"])};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

const LinkTitle = styled.div``;

export default styled(ButtonLink)``;
