const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new mongoose.Schema({
    ShowDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
        trim: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    theaterName: {
        type: String,
        trim: true
    },
    screen: {
        type: Number,
        trim: true
    },
    movieName: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;