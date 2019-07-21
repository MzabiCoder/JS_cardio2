const mongoose = require('mongoose')

const uRlSchema = new mongoose.Schema({
    urlCode: String,
    LongURL: String,
    ShortUrl: String,
    date: {
        type: String,
        default: Date.now
    }

})

module.exports = mongoose.model('URLE', uRlSchema)



db.posts.insertMany([
    {
        title:'Post tow',
        body:'boMdy1',
        category:'News',
        likes:4,
        tags:['news','events'],
        user:{
            name:'nabil',
            job:'engineer'
        },
        date:Date()
    },
    {
        title:'Post three',
        body:'boMdy1',
        category:'News',
        likes:4,
        tags:['news','events'],
        user:{
            name:'nabil',
            job:'engineer'
        },
        date:Date()
    },
    {
        title:'Post four',
        body:'boMdy1',
        category:'News',
        likes:4,
        tags:['news','events'],
        user:{
            name:'nabil',
            job:'engineer'
        },
        date:Date()
    }
])