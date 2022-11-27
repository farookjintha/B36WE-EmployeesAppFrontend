import './footer.css';

const Footer = () => {
    return(
        <div className="container footer-container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom">
                <li className="nav-item">Home</li>
                <li className="nav-item">Feature</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">FAQ</li>
                <li className="nav-item">About</li>
                </ul>
                <p className="text-center text-muted">© 2022 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer;