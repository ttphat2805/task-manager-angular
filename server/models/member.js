const mongoose = require('mongoose');
 
const MemberSchema = mongoose.Schema({
    fullname: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    timestamp:{
        type: 'date',
        default: Date.now()
    }
})


const Member = mongoose.model('member', MemberSchema);
module.exports = Member;