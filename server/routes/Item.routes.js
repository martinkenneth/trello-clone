const Item = require('../controllers/Item.controllers');

module.exports = (app) => {
    app.get('/api/items', Item.findAllItems)
    app.get('/api/items/:_id', Item.findOneItem)
    app.post('/api/items/new', Item.createItem)
    app.put('/api/items/update/:_id', Item.updateItem)
    app.delete('/api/items/delete/:_id', Item.deleteItem)
}