const List = require('../models/List.models');

module.exports = {

    //read all
    findAllLists: (req, res) => {
        List.find()
            .then(allLists => {
                console.log('Finding all lists in database');
                return res.json({lists: allLists});
            })
            .catch(err => res.json({message: 'Something went wrong with the read all', error: err}));
    },

    //read one
    findOneList: (req, res) => {
        List.findById(req.params._id)
            .then(oneList => {
                console.log('Finding one list in the database by id');
                return res.json({list: oneList});
            })
            .catch(err => res.json({message: 'Something went wrong with the read one', error: err}));
    },

    //create
    createList: (req, res) => {
        List.create(req.body)
            .then(newList => {
                console.log('Created a new list in the database')
                return res.json({list: newList});
            })
            .catch(err => res.status(400).json(err));
    },

    //update one
    updateList : (req, res) => {
        List.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
            runValidators: true
        })
            .then(updatedList => {
                console.log('Updated an list in the database');
                return res.json({list: updatedList});
            })
            .catch(err => res.status(400).json(err));
    },

    //delete one
    deleteList : (req, res) => {
        List.deleteOne({_id: req.params._id})
            .then(result => {
                console.log('Deleted an list from the database');
                return res.json({result: result});
            })
            .catch(err => res.json({message: 'Something went wrong with the delete', error: err}));
    }
}