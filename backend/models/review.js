const mongoose = require('mongoose')

const Reviews = mongoose.model('Reviews', {
	_id: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
    },
		movie_title:{
			type: String,
			required: true,
			minlength: 1,
			trim: true
		},
    content: {
        type: String,
		required: true,
		minlength: 1,
		trim: true
    },
    date: {
        type: Date,
				default: Date.now,
		required: true,
		minlength: 1,
		trim: true
    },
    spoilers: {
        type: Boolean,
		required: true,
    },
    comments: [{username: {type: String,
                           required: true},
                date: {type:Date, default: Date.now},
                content: {
                    type: String,
                    required: true,
                    minlength: 1,
                    trim: true
                }}]
})

module.exports = { Reviews }
