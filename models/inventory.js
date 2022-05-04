import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
  name: { type: String },
  num: { type: String }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Inventory = mongoose.model('Profile', inventorySchema)

export { Inventory }