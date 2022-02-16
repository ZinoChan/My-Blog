import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <main>
      <header>
        <nav className="max-w-screen-lg mx-auto p-2 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-primary font-bold uppercase text-primary-100">
              logo
            </h1>
          </div>
          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
