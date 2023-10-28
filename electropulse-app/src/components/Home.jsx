import React from 'react';
import Cards from './home_comp/Cards';
import Brand from './home_comp/Brand';


const Home  = () => {
    return (
        <>
        {/* fake nav bar */}
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </section>

            {/* home - body */}
            <section className="home-page opacity-100">
                <div className="container title">
                    <h1 className="f-s-1 text-center opacity-100 ">Electro<span className="text-white">Pulse</span></h1>
                    
                </div>
            </section>


            {/* brand */}
            <section>
                <Brand />
            </section>

            {/* viewed cards */}
            <section className="viewed cards">
                

            </section>

            {/* cards */}
            <section className="cards">
                <Cards />
            </section>
            
        </>
    )
}
export default Home