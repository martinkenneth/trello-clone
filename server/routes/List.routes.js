const List = require('../controllers/List.controllers');

module.exports = (app) => {
    app.get('/api/lists', List.findAllLists)
    app.get('/api/lists/:_id', List.findOneList)
    app.post('/api/lists/new', List.createList)
    app.put('/api/lists/update/:_id', List.updateList)
    app.delete('/api/lists/delete/:_id', List.deleteList)
}