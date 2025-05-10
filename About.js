const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true // Ensures no leading/trailing spaces
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    mission: {
        type: String,
        required: [true, 'Mission statement is required'],
        trim: true
    },
    vision: {
        type: String,
        required: [true, 'Vision statement is required'],
        trim: true
    },
    achievements: [{
        type: String,
        trim: true // Ensures each achievement string is clean
    }]
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('About', aboutSchema);
