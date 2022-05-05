import mongoose from 'mongoose'

const contractSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  saleDate: { type: String }, 
  entName: { type: String },
  businessName: { type: String },
  buyerFirstName: { type: String },
  buyerLastName: { type: String },
  natcomNum: { type: String },
  digicelNum: { type: String },
  why: { type: String },
  productPurchased: { type: String },
  productNum: { type: String },
  paymentType: { type: String },
  totalPaid: { type: String },
  amountToBePaid: { type: String },
  numberOfPayments: { type: String },
  amountPerPayment: { type: String },
  dateOfSignature: { type: String },
}, {
  timestamps: true
})

const Contract = mongoose.model('Contract', contractSchema)

export { Contract }