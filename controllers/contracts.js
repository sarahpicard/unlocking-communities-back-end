import { Contract } from "../models/contract.js"

function create(req, res) {
  console.log(req.body)
  Contract.create(req.body)
  .then(contract => res.json(contract))
  .catch(err => res.json(err))
}
// function create(req, res) {
//   console.log('req.body', req.body)
//   // req.body.owner = req.user.profile._id
//   Contract.create(req.body, function(err, todo) {
//     res.redirect('/contracts')
//   })
// }

function index(req, res) {
  Contract.find({})
  .then(contracts => res.json(contracts))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  Contract.findById(req.params.id)
  .then(contract => res.json(contract))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  create,
  index,
  show,
}