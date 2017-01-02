### Message model ###
MessageSchema = new mongoose.Schema
        text: String
        chat: {type: mongoose.Schema.Types.ObjectId, ref: 'Chat'}

mongoose.model 'Message', MessageSchema
