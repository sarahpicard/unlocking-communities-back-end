import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
  name: { type: String },
  num: { type: String }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile"}, 
  inWarehouse: { type: String},
  inTransit: { type: String},
}, {
  timestamps: true
})

const Inventory = mongoose.model('Inventory', inventorySchema)

export { Inventory }