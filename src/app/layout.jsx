import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav-Fot/Navbar";
import Footer from "@/components/Nav-Fot/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✅ improves performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // ✅ improves performance
});

// ✅ SEO Metadata
export const metadata = {
  title: {
    default: "Solar Space",
    template: "%s | Solar Space", // Dynamic titles
  },
  description: "Affordable and sustainable solar energy solutions in India by Solar Space.",
  keywords: [
    "solar panels India",
    "solar installation Mumbai",
    "clean energy solutions",
    "Solar Space",
    "renewable energy company",
  ],
  metadataBase: new URL("https://solarspaces.in"),
  authors: [{ name: "Solar Space Team", url: "https://solarspaces.in" }],
  openGraph: {
    title: "Solar Space – Green Energy for India",
    description: "Empowering India's transition to clean, renewable energy.",
    url: "https://solarspaces.in",
    siteName: "Solar Space",
    images: [
      {
        url: "/og-image.jpg", // ✅ add an image in public folder (1200x630)
        width: 1200,
        height: 630,
        alt: "Solar Space - Green Energy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Space",
    description: "Sustainable solar energy solutions for homes and businesses.",
    images: ["/og-image.jpg"],
    creator: "@solarspace", // ⚠️ Optional: your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#3B0A4F", // Matches your branding
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <a href="#content" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-[#E5C97B] text-[#3B0A4F] px-3 py-2 rounded shadow">Skip to content</a>
        <Navbar />
        <main id="content">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
