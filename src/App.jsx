import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import Main from "./topics/props/PropsComponent";
import "./app.css";

export function App() {
  return (
    <>
      <NavbarComponent />
      <Main />
      <FooterComponent />
    </>
  );
}
