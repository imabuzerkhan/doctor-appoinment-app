import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Provider from "@/_components/Provider";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Provider defaultTheme="system" attribute="class" >
        <div className="md:px-20  ">
          <Header></Header>
          {children}
          <Footer/>
        </div>
        </Provider>
        </body>
    </html>
  );
}
