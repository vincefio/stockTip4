var express = require('express')
var router = express.Router()
var Stock = require('../db/models/Stock')

router.post('/newStock', (req, res) => {
    //console.log(req.body)

    var newStock = new Stock(req.body)
    newStock.save(function (err) {
        if (err) return handleError(err)

    })

    res.send('stock saved!')
})

router.get('/myStocks', (req, res) => {
    console.log('my stocks get route')
    let results = '';

    Stock.find({}, function (err, res) {
        results = res;
    })
        .then(function () {
            console.log('results ' + results)
            res.send(results)
        })
        .catch(err => { console.log(`error ${err}`) })
})

router.delete(`/delete/:id`, (req, res) => {
    Stock.findById(req.params.id)
        .then(stock => stock.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;