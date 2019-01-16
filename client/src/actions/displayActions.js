import axios from 'axios'
import store from '../store.js'

export const getStocks = () => dispatch => {
    const currentStocks = store.getState().stocks.myStocks

    dispatch({
        type: 'TRANSFER_STOCKS',
        payload: currentStocks
    })
}

export const getStockData = (callback) => dispatch => {
    var stocksToGraph = store.getState().stocks.myStocks
    var num = -1
    var name
    console.log(`get stock data ${JSON.stringify(stocksToGraph)}`)
    //console.log(`get stock data ${stocksToGraph[1].name}`)
    for (var i = 0; i < stocksToGraph.length; i++) {

        axios.get(`https://api.iextrading.com/1.0/stock/${stocksToGraph[i].name}/chart/1y`)
            .then((response) => {
                //console.log(response);

                num++

                //console.log(num)
                name = store.getState().stocks.myStocks[num].name
                //console.log(name)

                dispatch({
                    type: "HANDLE_DATA",
                    payload: { name: name, data: response }
                    // payload: response
                })

            })
            .then(() => {
                //console.log('dot thens all day!')
                callback()
            })

            .catch(function (error) {
                console.log(error);
            });
    }
}

export const arrangeChartData = () => dispatch => {
    console.log('arrange chart data action')
    //double for loop
    //first loop through store.getState().chartData.stocks
    //loop through store.getState().chartData.stockData.data.data and dispatch as you go
    var chosenStocks = store.getState().chartData.stockData

    var dataTable = []
    var tableRow = []
    console.log(chosenStocks[0])
    //console.log(chosenStocks.chartData.stockData[0])

    for (var i = 0; i < store.getState().chartData.stocks.length; i++) {
        console.log('hit')
        dataTable = []
        console.log(store.getState().chartData)
        for (var j = 0; j < store.getState().chartData.stockData[i].data.data.length; j++) {
            tableRow = []
            tableRow.push(chosenStocks[i].data.data[j].date)
            tableRow.push(chosenStocks[i].data.data[j].open)
            tableRow.push(chosenStocks[i].data.data[j].high)
            tableRow.push(chosenStocks[i].data.data[j].low)
            tableRow.push(chosenStocks[i].data.data[j].close)
            dataTable.push(tableRow)
        }

        //return the data table
        //do a dispatch?


        if (i == chosenStocks.length - 1) {
            console.log('shits equal')
            dispatch({
                type: "CREATE_TABLE_DATA",
                payload: dataTable
            })
        }

    }

    //console.log(dataTable)
    /*dispatch({
        type: "CREATE_TABLE_DATA",
        payload: dataTable
    })*/
}