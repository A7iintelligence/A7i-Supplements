import "./globals.css";
import "./ingredient.css";

export const metadata = {
  metadataBase: new URL("https://supplements.a7iintelligence.com"),

  title: {
    default: "A7i Supplements — Evidence made simple",
    template: "%s | A7i Supplements",
  },

  description:
    "Understand supplements, food sources, evidence, forms, absorption, interactions and timing without the noise.",

  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }) {
  return children;
}
