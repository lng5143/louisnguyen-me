import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/nav-bar";
import Footer from "@/components/nav/footer";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Louis Nguyen",
  description: "Louis Nguyen's personal website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${raleway.className} flex flex-col gap-20 min-h-screen font-medium`}>
        <NavBar />
        <main className="px-32 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
