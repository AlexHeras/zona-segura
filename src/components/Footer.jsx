export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container">
                <small>© {year} Mi sitio. Todos los derechos reservados.</small>
            </div>
        </footer>
    );
}