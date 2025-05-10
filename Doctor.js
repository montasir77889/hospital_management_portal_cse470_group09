const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const DoctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  sex: { type: String },
  dateOfBirth: { type: Date },
  mobileNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bloodGroup: { type: String },
  age: { type: Number },
  degrees: { type: String },
  institute: { type: String },
  specialty: { type: String },
  department: { type: String },
  availability: { type: String },
  createdAt: { type: Date, default: Date.now },
  profilePicture: { type: String }
});

// Hash password before saving
DoctorSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare password
DoctorSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Doctor', DoctorSchema);

