import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
  name: { type: String },
  waterNum: { type: String }, 
  stoveNum: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile"}, 
  waterInTransit: { type: String },
  stoveInTransit: { type: String},
}, {
  timestamps: true
})

const Inventory = mongoose.model('Inventory', inventorySchema)

export { Inventory }