import mongoose, { model } from "mongoose";

//Create schema and model

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

},
{
    timestamps: true //createdAt and updatedAt fields obtained.
}
);

const Note = mongoose.model("Note", noteSchema);
export default Note;