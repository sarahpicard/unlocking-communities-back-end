import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
  name: { type: String },
  waterNum: { type: String }, 
  stoveNum: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile"}, 
  waterToOrder: { type: String },
  stoveToOrder: { type: String},
  subtractStove: { type: String },
}, {
  timestamps: true
})

const Inventory = mongoose.model('Inventory', inventorySchema)

export { Inventory }