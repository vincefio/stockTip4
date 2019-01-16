const initialState = {
    stocks: [],
    stockData: [],
    dataForTable: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "TRANSFER_STOCKS":
            console.log('chart reducer')
            return {
                ...state,
                stocks: action.payload
            }
        case "HANDLE_DATA":
            console.log('handle data chart reducer')
            return {
                ...state,
                stockData: [...state.stockData, action.payload]
            }
        case "CREATE_TABLE_DATA":
            console.log('create table data reducer')
            return {
                ...state,
                dataForTable: [...state.dataForTable, action.payload]
            }
        default:
            return state;
    }

}