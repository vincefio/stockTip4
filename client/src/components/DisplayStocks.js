import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchStocks, addStock, getMyStocks } from '../actions/postActions'
import store from '../store.js'


class DisplayStocks extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    //display 50 random stocks
    componentWillMount() {
        //only fetch stocks if this.props.stocks.length === 0
        if (this.props.stocks.length === 0) {
            this.props.fetchStocks()
        }

        //only run getMyStocks if this.props.myStocks.length === 0
        if (this.props.myStocks.length === 0) {
            this.props.getMyStocks()
        }

        //console.log(store.getState())
    }

    handleClick(symbol, id, event) {
        event.preventDefault()
        //console.log(`clicked ${symbol}`)
        console.log(`my stocks ${this.props.myStocks}`)
        if (this.props.myStocks.length > 4) {
            alert('you are only allowed 5 stocks')
        } else {
            this.props.addStock(symbol, id)
        }


    }

    render() {
        //map out the state to render paragraphs for each random stock object
        var stockItems
        if (this.props.stocks) {
            console.log('we have data')
            console.log(this.props.stocks)
            stockItems = this.props.stocks.map(stock => {
                return <a key={stock.iexId} onClick={this.handleClick.bind(this, stock.symbol, stock.iexId)} href="#"><p >{`${stock.symbol}: ${stock.name}`}</p></a>
            })
        }

        // console.log('render ' + JSON.stringify(this.props))

        return (

            <div className="container">

                <h2>50 Random Stocks</h2>
                <p className="instructionText">Add up to 5 stocks to get started. Click the stock to add to your cart</p>
                <p className="instructionText">You currently have {this.props.myStocks.length} stocks in your portfolio</p>
                <div className='randomDisplay'>

                    {stockItems}
                </div>
                <div className="instructionText">For all accepted symbols click <a href="https://api.iextrading.com/1.0/ref-data/symbols" target="_blank">here</a></div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    stocks: state.stocks.stocks,
    myStocks: state.stocks.myStocks
})

export default connect(mapStateToProps, { fetchStocks, addStock, getMyStocks })(DisplayStocks)
