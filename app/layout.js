import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { Nav, Footer } from "../components/Shell";

export const metadata = {
  title: { default: "Auzmor Hire — AI-Powered Applicant Tracking System for Enterprise & Government", template: "%s | Auzmor Hire" },
  description: "Auzmor Hire is the AI-powered applicant tracking system for enterprises and public agencies: explainable AI, 20,000+ job boards, structured, compliant hiring and real-time reporting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
