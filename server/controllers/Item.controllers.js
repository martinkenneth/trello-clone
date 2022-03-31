const Item = require('../models/item.models');

module.exports = {

    //read all
    findAllItems: (req, res) => {
        Item.find()
            .then(allItems => {
                console.log('Finding all items in database');
                return res.json({items: allItems});
            })
            .catch(err => res.json({message: 'Something went wrong with the read all', error: err}));
    },

    //read one
    findOneItem: (req, res) => {
        Item.findById(req.params._id)
            .then(oneItem => {
                console.log('Finding one item in the database by id');
                return res.json({item: oneItem});
            })
            .catch(err => res.json({message: 'Something went wrong with the read one', error: err}));
    },

    //create
    createItem: (req, res) => {
        Item.create(req.body)
            .then(newItem => {
                console.log('Created a new item in the database')
                return res.json({item: newItem});
            })
            .catch(err => res.status(400).json(err));
    },

    //update one
    updateItem : (req, res) => {
        Item.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedItem => {
                console.log('Updated an item in the database');
                return res.json({item: updatedItem});
            })
            .catch(err => res.status(400).json(err));
    },

    //delete one
    deleteItem : (req, res) => {
        Item.deleteOne({_id: req.params._id})
            .then(result => {
                console.log('Deleted an item from the database');
                return res.json({result: result});
            })
            .catch(err => res.json({message: 'Something went wrong with the delete', error: err}));
    }
}