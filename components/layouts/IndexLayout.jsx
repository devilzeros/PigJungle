import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "../Footers/Footer";

export default function IndexLayout({ children }) {
  return (
    <>
      <IndexNavbar />
        {children}
        <Footer/>
    </>
  );
}
