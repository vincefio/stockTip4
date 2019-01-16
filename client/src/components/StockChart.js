import React, { Component } from 'react'
import AnyChart from 'anychart-react'
import anychart from 'anychart'
import { connect } from 'react-redux'
import { fetchStocks } from '../actions/postActions'
import { getStocks, getStockData, arrangeChartData } from '../actions/displayActions'
import store from '../store.js'

class StockChart extends Component {
    componentWillMount() {
        //need to make get requests for the stocks in portfolio
        this.props.getStocks()
        this.props.getStockData(this.props.arrangeChartData)

        //create another function w promise or callback
    }


    render() {
        //loop through the state and add data for each response object
        // console.log(store.getState().chartData.stocks.length)


        var table, table2, table3, mapping, chart;
        table = anychart.data.table();
        //put state data into an array of 

        setTimeout(() => {
            // console.log('set timeout ' + JSON.stringify(store.getState()))
            for (var i = 0; i < store.getState().chartData.stocks.length; i++) {
                table3 = anychart.data.table()

                table3.addData(
                    store.getState().chartData.dataForTable[i]
                )



                //chart.plot(0).ohlc(mapping).name(store.getState().chartData.stocks[i].name);
                //var series = chart.plot(0).ohlc(mapping);
                //series.name(store.getState().chartData.stocks[i].name);
                // create plot on the chart
                var plot = chart.plot(0);//.ohlc(mapping)//.name(store.getState().chartData.stocks[i].name);
                plot.yScale().comparisonMode('none');
                plot.yAxis().labels().format('{%Value}%');
                plot.yGrid(true)
                    .yMinorGrid(true);

                plot.line(table3.mapAs({
                    'value': 4
                })).name(store.getState().chartData.stocks[i].name);
                // plot.name('yo')
            }
        }, 1000)


        // defining the chart type
        chart = anychart.stock();
        chart.crosshair().displayMode("float");




        chart.scroller().area(table.mapAs({ 'value': 4 }));
        //chart.selectRange('2005-01-03', '2005-11-20');

        return (
            <div className="container chart">
                <AnyChart
                    //width={800}
                    height={600}
                    instance={chart}
                    title="Compare Stocks"
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //take state, and send it into component as 'props'
    stocks: state.stocks.stocks,
    myStocks: state.stocks.myStocks
})

export default connect(mapStateToProps, { getStocks, getStockData, arrangeChartData })(StockChart)