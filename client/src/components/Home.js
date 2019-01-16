import React, { Component } from 'react'
import DisplayStocks from './DisplayStocks'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyStocks from './MyStocks'
import StockChart from './StockChart'

export default class Home extends Component {
    render() {
        return (
            <div>

                <Nav />

                <Route exact path="/" component={DisplayStocks} />
                <Route exact path="/stocks" component={MyStocks} />
                <Route exact path="/chart" component={StockChart} />
            </div>
        )
    }
}
