import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import Provider from "@/app/Provider";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor-appointment-app",
  description: "Generated by create Abuzer khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Provider defaultTheme="light" attribute="class" >
      
          <Header className="px-0 md:px-20 " ></Header>
          <div className=" px-5 md:px-20  ">
          {children}
          <Footer/>
        </div>
        </Provider>
        </body>
    </html>
  );
}
