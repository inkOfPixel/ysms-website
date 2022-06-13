import type { LinksFunction, MetaFunction } from "@remix-run/node";
import React from "react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";
import Wrapper from "~/components/Wrapper";

export const meta: MetaFunction = () => ({
  title: "GDPR Compliant",
  description:
    "This guide aims to help make your shopify store compatible with GDRP as regards marketing communication with YSMS",
  "og:title": "GDPR Compliant",
  "og:description":
    "This guide aims to help make your shopify store compatible with GDRP as regards marketing communication with YSMS",
  "og:type": "website",
  "twitter:card": "summary",
  "twitter:creator": "@inkOfPixel",
  "twitter:title": "GDPR Compliant",
  "twitter:description":
    "This guide aims to help make your shopify store compatible with GDRP as regards marketing communication with YSMS",
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://use.typekit.net/zpe2fzo.css",
  },
];

export default function GDPRCompliant() {
  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Rte>
          <h1>GDPR Compliance</h1>

          <p>
            The General Data Protection Regulation (EU) 2016/679 (GDPR) is a
            regulation in EU law on data protection and privacy in the European
            Union (EU) and the European Economic Area (EEA)
          </p>

          <p>
            The GDPR aims primarily to give control to individuals over their
            personal data and to simplify the regulatory environment for
            international business by unifying the regulation within the EU.
          </p>

          <p>
            In order to send text messages you must have collected telephone
            numbers legally and through an explicit consent to be able to use
            them for marketing purposes. Currently the only way to recover this
            information is through shopify checkout.
          </p>
          <p>
            The most important thing to keep in mind is that the customer must
            accept your privacy policy expressly stated in the checkout phase
            and the consent for marketing activities must be clear.
          </p>

          <p>
            This guide aims to help make your shopify store compatible with GDRP
            as regards marketing communication with YSMS
          </p>

          <ul>
            <li>How to implement your privacy policy</li>
            <li>
              How to get consent from your customers during the checkout phase
            </li>
          </ul>

          <p>
            <strong>Disclaimer</strong>: However, we recommend to be followed by
            a lawyer for the GDPR phase, before giving for certain that with
            these guides you can comply with the GDPR
          </p>

          <h2>1. Privacy Policy</h2>

          <h3>
            1. In the admin part of shopify, go to the Settings / Legal{" "}
            <span className="link">/admin/settings/legal</span>
          </h3>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-settings-legal.png"
          />

          <h3>
            2. In the privacy information text box you should implement a
            paragraph with the following text
          </h3>

          <div className="textToCopy">
            Text Marketing Terms & Conditions:
            <br />
            We use a platform for text messaging marketing which is subject to
            the following terms and conditions. By opting-in for our text
            marketing, you agree to these terms and conditions.
            <br />
            By entering your phone number at checkout and starting or completing
            an order or by signing up through an SMS marketing registration form
            you agree that we send you text messages for updates on your orders,
            promotional offers, or general communications. This consent is not a
            condition for any kind of purchase.
            <br />
            Your information (name, telephone number, and purchases) will be
            shared with our SMS marketing platform owned by inkOfPixel Srl, a
            company based in Milan, Italy. This data will be used to send you
            targeted messages and general updates. To send you messages, your
            phone number will be passed to messaging operators in order to
            fullfill the delivery of SMS messages.
            <br />
            If you no longer want to receive marketing text messages and
            notifications, use the unsubscribe link that we will send at the end
            of each message.
            <br />
            You can contact us to receive any information regarding text
            marketing messages
          </div>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-privacy-policy.png"
          />

          <h3>3. Confirm the changes by clicking the Save button.</h3>

          <h2>2. Retrieve consents during checkout</h2>

          <h3>
            1. go to the Settings / Checkout{" "}
            <span className="link">/admin/settings/checkout</span>
          </h3>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-settings-checkout.png"
          />

          <h3>
            2. In the Form options section, under Shipping address phone number
            make sure it is selected Optional.
          </h3>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-phone-optional.png"
          />

          <h3>3. Scroll down and click on Manage checkout language</h3>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-checkout-language.png"
          />

          <h3>
            4. Find "Accept marketing checkbox label" and paste the following
            text in the fieldbox:
          </h3>

          <div className="textToCopy">
            Keep me up to date on news and exclusive offers via text message
            and/or email
          </div>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-checkout-accept-marketing.png"
          />

          <h3>5. Next, find the "Phone label" setting on the page.</h3>

          <p>Under Phone Label and Optional Phone Label add this:</p>

          <div className="textToCopy">
            Phone for updates and exclusive offers
          </div>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-checkout-phone-label.png"
          />
          <h3>
            6. Find for "Checkout shop policies" and under "Privacy Policy" add
            the following text:
          </h3>

          <div className="textToCopy">
            By proceeding with shipments, you consent to the privacy policy and
            to receive exclusive news and offers via text message. It is not
            necessary to complete the purchase. View privacy and T&C.
          </div>

          <img
            alt=""
            src="/images/gdpr-compliant/ysms-shopify-checkout-privacy.png"
          />

          <h3>7. Confirm the changes by clicking the Save button.</h3>

          <h3>Great, your checkout is now updated for the GDPR.</h3>

          <h2>3. Unsubscribing customers</h2>

          <p>
            The GDPR requires that the possibility of unsubscribe be treated in
            a simple way
          </p>

          <p>
            YSMS automatically unsubscribes from all customers who click on the
            unsubscribe link in their text message. You can also unsubscribe
            from customers manually by removing the tag from the customer.
          </p>

          <h2>4. Delete Data</h2>

          <p>
            If a customer asks you to remove the data from our server, write to
            us <a href="mailto:info@ysms.me">info@ysms.me</a>
          </p>

          <p>Last Modified: May 16, 2020</p>
        </Rte>
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

const Rte = styled.div`
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
    color: ${({ theme }) => theme.colors.green};
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border-radius: 2px;

    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  }
  p {
    margin-bottom: 10px;
  }
  a {
    color: ${({ theme }) => theme.colors.green};
  }
  ul {
    margin-top: 10px;
  }
  .textToCopy {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: Courier, monospace;
    font-size: 13px;
    margin-bottom: 20px;
  }
  .link {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border: 1px solid ${({ theme }) => theme.colors.greenHover};
    padding: 4px 8px;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: Courier, monospace;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-left: 5px;
    white-space: pre;
  }
`;
