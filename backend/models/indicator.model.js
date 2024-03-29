const mongoose = require('mongoose')

const indicatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('indicators', indicatorSchema,'indicators')