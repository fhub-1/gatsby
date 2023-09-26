import Navbar from "../Navbar";

import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): any {
  return (
    <div>
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */} footer
    </div>
  );
}
