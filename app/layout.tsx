import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { Providers } from "./redux/provider";
import { RegisterModal } from "./components/modals/RegisterModal";
import { ToasterProvider } from "./providers/ToasterProvider";

export const metadata = {
  title: "CozyNest",
  description: "A Hotel Booking Application",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
