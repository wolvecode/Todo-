const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/todoist', 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('connected to database'))
    .catch(console.error)

