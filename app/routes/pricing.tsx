import type { LinksFunction, MetaFunction } from "@remix-run/node";
import React from "react";
import styled from "styled-components";
import ButtonLink from "~/components/ButtonLink";
import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";
import Table from "~/components/pricing/Table";
import Wrapper from "~/components/Wrapper";

export const meta: MetaFunction = () => ({
  title: "Pricing | YSMS",
  description:
    "Here you can find all prices divided by country. No hidden fees. Pay only for the messages you sent.",
  "og:title": "Pricing | YSMS",
  "og:description":
    "Here you can find all prices divided by country. No hidden fees. Pay only for the messages you sent.",
  "og:type": "website",
  "twitter:card": "summary",
  "twitter:creator": "@inkOfPixel",
  "twitter:title": "Pricing | YSMS",
  "twitter:description":
    "Here you can find all prices divided by country. No hidden fees. Pay only for the messages you sent.",
  keywords: "shopify, gdpr, consent, privacy, customer data, ecommerce",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://use.typekit.net/zpe2fzo.css",
  },
];

export default function Pricing() {
  return (
    <Container>
      <Navigation />
      <Wrapper>
        {/* <Title>
          Increase sales.
          <br />
          4x ROI Guaranteed.
        </Title>

        <Subtitle>
          Create, launch, and manage your SMS marketing program. Unlock a new
          marketing channel guaranteed to drive revenue, not just clicks.
        </Subtitle> */}
        <PricingContainer>
          <Texts>
            <Title>Pricing</Title>
            <Subtitle>
              No hidden fees. Pay only for the messages you sent.
            </Subtitle>
            <ButtonLink href="https://apps.shopify.com/ysms">
              Get started
            </ButtonLink>
          </Texts>
          <TableContainer>
            <Table />
          </TableContainer>
        </PricingContainer>
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

const PricingContainer = styled.div`
  display: flex;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  flex: 1;
`;

const Texts = styled.div`
  flex: 0 0 50%;
  @media (max-width: 760px) {
    flex: 0 0 100%;
    ${ButtonLink} {
      margin-bottom: 60px;
    }
  }
`;
