const mongoose = requre('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    requred: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxLength: [40, 'Title cannot be more than 40 characters']
  },
  description: {
    type: String,
    required: true,
    maxLength: [20, 'Description cannot be more than 200 characters']
  }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);