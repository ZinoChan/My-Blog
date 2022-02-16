const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <nav className="max-w-screen-lg mx-auto p-2 flex items-center justify-between">
          <div>
            <h1 className="text-xl uppercase text-primary-100">logo</h1>
          </div>
          <div></div>
        </nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
