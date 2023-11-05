import "./globals.css";

import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import { Libre_Franklin } from "next/font/google";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from "next/script";

const { OPEN_GRAPH, SITE } = config;

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
});

export const metadata: Metadata = {
  description: SITE.description,
  metadataBase: new URL(config.SITE.url),
  openGraph: OPEN_GRAPH,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libreFranklin.className}>
      {/* Favicon */}
      <link rel="icon" href="/favicon.png" type="image/png" />

      <body>
        <div className="flex flex-col justify-between h-screen ">
          <Nav links={nav} />
          <div className="">{children}</div>
          <Footer />
        </div>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}');
            `}
        </Script>
      </body>
    </html>
  );
}
