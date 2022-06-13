import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";
import Wrapper from "~/components/Wrapper";

export const meta: MetaFunction = () => ({
  title: "Terms and Conditions | YSMS",
  description: "Terms and Conditions of YSMS",
  "og:title": "Terms and Conditions | YSMS",
  "og:description": "Terms and Conditions of YSMS",
  "og:type": "website",
  "twitter:card": "summary",
  "twitter:creator": "@inkOfPixel",
  "twitter:title": "Terms and Conditions | YSMS",
  "twitter:description": "Terms and Conditions of YSMS",
  keywords: "",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://use.typekit.net/zpe2fzo.css",
  },
];

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://www.iubenda.com/api/terms-and-conditions/44977053",
  );
  const policy = await res.json();
  return { policy };
};

export default function TermsAndConditions() {
  const { policy } = useLoaderData();
  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Content
          dangerouslySetInnerHTML={{ __html: policy?.content }}
        ></Content>
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 120px;
`;

const Content = styled.div`
  width: 800px;
  margin: 0 auto;
  line-height: 1.4em;
  padding-bottom: 120px;
  @media (max-width: 900) {
    width: 100%;
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border-radius: 2px;
  }
  p {
    margin-bottom: 10px;
  }
  ul {
    margin-top: 10px;
  }
  a {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
