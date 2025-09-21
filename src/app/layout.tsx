import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angelo Paul Yenque - Coordinador de Investigación, Desarrollo & T.I.",
  description:
    "Portfolio de Angelo Paul Yenque, Ingeniero de Sistemas especializado en Business Intelligence, análisis de datos y gestión de sistemas empresariales.",
  keywords:
    "Angelo Yenque, Business Intelligence, SAP Business One, Power BI, QlikView, análisis de datos, sistemas empresariales, coordinador TI",
  authors: [{ name: "Angelo Paul Yenque" }],
  creator: "Angelo Paul Yenque",
  openGraph: {
    title:
      "Angelo Paul Yenque - Coordinador de Investigación, Desarrollo & T.I.",
    description:
      "Portfolio de Angelo Paul Yenque, Ingeniero de Sistemas especializado en Business Intelligence, análisis de datos y gestión de sistemas empresariales.",
    url: "https://ayenque.me",
    siteName: "Angelo Paul Yenque Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Angelo Paul Yenque - Coordinador de Investigación, Desarrollo & T.I.",
    description:
      "Portfolio de Angelo Paul Yenque, Ingeniero de Sistemas especializado en Business Intelligence, análisis de datos y gestión de sistemas empresariales.",
    creator: "@ayenquet",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
