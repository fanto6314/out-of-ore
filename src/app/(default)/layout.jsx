import { Inter } from "next/font/google";
import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";
import "../css/globals.css";
import "../css/scrollbar.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "North Modding Company",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}