import { ReactNode } from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import "./style.scss";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="layout-wrapper">
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
      <Footer />
    </section>
  );
};
