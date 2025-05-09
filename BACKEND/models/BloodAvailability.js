// // const mongoose = require('mongoose');

// // const BloodAvailabilitySchema = new mongoose.Schema({
// //   bloodGroup: {
// //     type: String,
// //     required: true,
// //     enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
// //   },
// //   count: {
// //     type: Number,
// //     required: true,
// //     default: 0
// //   }
// // });

// // module.exports = mongoose.model('BloodAvailability', BloodAvailabilitySchema);
// const mongoose = require('mongoose');

// const BloodAvailabilitySchema = new mongoose.Schema({
//   bloodGroup: { type: String, required: true, unique: true },
//   count: { type: Number, default: 0 }
// });

// module.exports = mongoose.model('BloodAvailability', BloodAvailabilitySchema);
const mongoose = require('mongoose');

const BloodAvailabilitySchema = new mongoose.Schema({
  bloodGroup: {
    type: String,
    required: true,
    unique: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
  },
  count: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('BloodAvailability', BloodAvailabilitySchema);
