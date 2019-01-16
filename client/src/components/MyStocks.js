import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
//import { getStockData } from '../actions/displayActions'
import store from '../store.js'
import { fetchStocks, addStock, getMyStocks, deleteStock } from '../actions/postActions'

class MyStocks extends Component {
    constructor(props) {
        super(props)

        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    onDeleteClick(id) {
        //console.log(store.getState())
        this.props.deleteStock(id)
    }

    render() {
        // console.log(`render ${JSON.stringify(this.props.myStocks)}`)
        if (this.props.myStocks.length > 0) {
            console.log(`if statement ${JSON.stringify(this.props.myStocks)}`)
            var stockList = this.props.myStocks.map((stock, i) => {

                return (
                    <div className='projectDiv valign-wrapper' key={i}>
                        <div className="projectListTitle">{stock.name}</div>
                        <a className="btn project-delete right red" onClick={this.onDeleteClick.bind(this, stock._id)}><i className="material-icons">clear</i></a>

                    </div>
                )
            })
        } else {
            return (
                <div className="container">
                    <h1>Add some stocks to get started</h1>
                </div>
            )
        }

        return (
            <div className="container">
                <h1>My stocks</h1>
                <p className="instructionText">Stocks I'm interested in.  Click to delete</p>
                {stockList}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //take state, and send it into component as 'props'
    stocks: state.stocks.stocks,
    myStocks: state.stocks.myStocks
})

export default connect(mapStateToProps, { deleteStock, getMyStocks })(MyStocks)
