import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-auto">
        <Navbar />
        <div className="container grow mx-auto py-4 px-8 flex flex-col">
          {children}
          <div className="container h-32 md:h-52"></div>
        </div>
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
