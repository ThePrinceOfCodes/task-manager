const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://admin:Insp1r3@cluster0.ivkkrjk.mongodb.net/taskManager?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(()=>console.log('CONNECTED TO THE DB')).catch((err)=>console.log(err))