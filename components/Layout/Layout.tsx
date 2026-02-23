
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
       <Header />
      <main>{children}</main>
      <FloatingContact  />
      <Footer />      
    </>
  );
};

export default Layout;
