import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styled from "styled-components";
import Campaigns from "~/components/Campaigns";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Message from "~/components/Message";
import Navigation from "~/components/Navigation";
import ValuePropositions from "~/components/ValuePropositions";

export const meta: MetaFunction = () => ({
  title: "YSMS - SMS marketing app for Shopify",
  description:
    "SMS marketing app to boost your Shopify store. Create and manage your SMS marketing campaign. Don't just send the classic boring emails",
  "og:title": "YSMS - SMS marketing app for Shopify",
  "og:description":
    "SMS marketing app to boost your Shopify store. Create and manage your SMS marketing campaign. Don't just send the classic boring emails",
  "og:type": "website",
  "twitter:card": "summary",
  "twitter:creator": "@inkOfPixel",
  "twitter:title": "YSMS - SMS marketing app for Shopify",
  "twitter:description":
    "SMS marketing app to boost your Shopify store. Create and manage your SMS marketing campaign. Don't just send the classic boring emails",
  keywords: "shopify, sms, marketing, ecommerce",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://use.typekit.net/zpe2fzo.css",
  },
];

export default function Index() {
  return (
    <Container>
      <Navigation />
      <Hero />
      <ValuePropositions />
      <Campaigns />
      <Message />
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
