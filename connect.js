const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB, 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('connected to database'))
    .catch(console.error)

