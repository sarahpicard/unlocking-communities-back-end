import { Inventory } from "../models/inventory.js";

function create(req, res) {
  req.body.owner = req.user.profile._id
  Inventory.create(req.body, function(err, todo) {
    res.redirect('/inventory')
  })
}

function index(req, res) {
  Inventory.find({})
  .then(inventory => res.json(inventory))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteItem(req, res) {
  Inventory.findByIdAndDelete(req.params.id, function(err, todo) {
    res.redirect('/inventory')
  })
}

export {
  create, 
  index, 
  deleteItem as delete,
}