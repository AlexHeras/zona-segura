import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

//Armazon comun para todas las paginas

export default function Layout({ children }) {
    return (
        <div className="site-wrapper">
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
        </div>
    );
}