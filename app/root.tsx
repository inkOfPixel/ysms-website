import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Trackers } from "./components/Trackers";
import { theme } from "./helpers/theme-helper";
import styles from "./styles/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "YSMS",
  viewport: "width=device-width,initial-scale=1",
  "twitter:image": "/ysms-featured-image.png",
  "og:image": "/ysms-featured-image.png",
});

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "https://use.typekit.net/zpe2fzo.css",
    as: "style",
  },
  {
    rel: "stylesheet",
    href: "https://use.typekit.net/zpe2fzo.css",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon.png",
  },
  { rel: "stylesheet", href: styles },
];

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: neuzeit-grotesk, sans-serif;
  }
  h1,h2,h3,p{
    margin: 0;
  }
`;

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
        {process.env.NODE_ENV == "production" && <Trackers />}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Outlet />
          <GlobalStyle />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
