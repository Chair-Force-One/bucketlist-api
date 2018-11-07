const mongoose = require('mongoose')

const adventureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  notes: { type: String },
  checked: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Adventure', adventureSchema)
