### Chat model ###
ChatSchema = new mongoose.Schema
        text: String
        messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Messages'}]

mongoose.model 'Chat', ChatSchema
