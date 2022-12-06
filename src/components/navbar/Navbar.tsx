import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg shadow p-3 rounded bg-success">
                <a className="navbar-brand fw-semibold mx-3" href="index.html">
                    <img src={logo} width="50" height="50" alt='Logo' />
                    Mardi Gras
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active mx-5" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" aria-current="page" href="2about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" aria-current="page" href="3media.html">Media</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" aria-current="page" href="4faq.html">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-5" aria-current="page" href="5contact.html">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navbar