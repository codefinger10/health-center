import type { Metadata } from 'next';
import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
export const metadata: Metadata = {
  title: '전국 보건소 위치 안내',
  description: '전국 보건소 위치 안내 서비스 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="8d0adb20f574d2b9ce583dffb9646df469aecb0f"
        />
        <link
          rel="canonical"
          href="https://health-center-devgreact.vercel.app"
        ></link>

        <meta
          name="google-site-verification"
          content="5Q8nUCmKspBxaAV5XLNCGp1RDz3rd_Qo4O-74Rhd4o0"
        />
      </head>
      <GoogleAnalytics gaId="G-Z9ZXNY44FG" />
      <body>{children}</body>
    </html>
  );
}
