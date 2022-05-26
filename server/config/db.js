const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/manager', {
        })
        console.log('Kết nối thành công')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB