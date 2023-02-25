import { Component } from "react";

class Header extends Component{
    render() {
        return (
            <header>
                <h1>Učilište Algebra</h1>
                <p>Budi izvrstan u onom što voliš</p>
                <ul>
                    <li><b>Tel:</b> +385 1 2332 861</li>
                    <li><b>Fax:</b> +385 1 2305 004</li>
                    <li><b>E-mail:</b> info@algebra.hr</li>
                </ul>
                <hr />
            </header>
        )
    }
}

export default Header;