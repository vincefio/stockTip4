import React, { Component } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    }

    render() {
        return (
            <div>
                <nav className='blue'>
                    <div className="nav-wrapper">
                        <a className="logo">Stock Tip</a>
                        <ul id="nav-mobile" className="right ">

                            <li className="hide-on-med-and-down"><Link to="/">Home</Link></li>
                            <li className="hide-on-med-and-down"><Link to="/stocks">My Stocks</Link></li>
                            <li className="hide-on-med-and-down"><Link to="/chart">Chart</Link></li>
                            <li><a className="dropdown-trigger hide-on-large-only" href="#!" data-target="dropdown1"><i className="material-icons right">dehaze</i></a></li>


                        </ul>

                        <ul id="dropdown1" className="dropdown-content">

                            <li className=""><Link to="/">Home</Link></li>
                            <li className=""><Link to="/stocks">My Stocks</Link></li>
                            <li className=""><Link to="/chart">Chart</Link></li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}
