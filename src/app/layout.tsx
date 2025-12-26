import "../styles/index.scss";
import ThemeProvider from "@/components/provider/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://shadyshanab.tech'),
  manifest: '/manifest.json',
  themeColor: '#0f172a',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      // { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=DM+Sans:wght@400;500;700&family=EB+Garamond:wght@400;500;600;700;800&family=Kufam:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;900&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true} className="scroll-smooth">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
