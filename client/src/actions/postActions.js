
//import { FETCH_STOCKS, NEW_POST } from './types';
import axios from 'axios'
import store from '../store.js'

export const fetchStocks = () => dispatch => {
    console.log('fetch posts')
    var randArr = []

    axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        .then((response) => {
            //console.log(response);
            //generate 50 random numbers, put in array
            for (var i = 0; i < 50; i++) {
                var randNum = Math.floor(Math.random() * response.data.length)
                randArr.push(response.data[randNum])
            }
            //console.log(randArr)

            dispatch({
                type: "FETCH_STOCKS",
                payload: randArr
            })

        })

        .catch(function (error) {
            console.log(error);
        });
};

export const addStock = (symbol, id) => dispatch => {
    console.log('add stock')
    console.log(store.getState())
    //add stock to database, limit this to 5
    axios.post('/newStock', {
        name: symbol,
        id: id
    })
        .then(function (response) {
            console.log(response);
            dispatch({
                type: "ADD_STOCK",
                payload: { "name": symbol }
            })
            // alert('stock added')
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getMyStocks = () => dispatch => {
    //below is the componentDidMount function from myStocks
    axios.get('/myStocks')
        .then(function (response) {
            console.log('my stocks ' + JSON.stringify(response.data))

            //dispatch response
            dispatch({
                type: "GET_MY_STOCKS",
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const deleteStock = (id) => dispatch => {
    //var self = this
    console.log(`delete stock ${id}`)
    axios.delete(`/delete/${id}`)
        .then(function (response) {
            //console.log(`response displayAction ${JSON.stringify(response)}`);

            dispatch({
                type: "DELETE_STOCK",
                payload: id
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
