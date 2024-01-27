import { ReactNode } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import "./style.scss";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="layout-wrapper">
      <Sidebar />
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
      <Footer />
    </section>
  );
};
