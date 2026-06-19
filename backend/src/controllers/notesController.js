import Note from "../models/Note.js";

//Get all
export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1}); // Latest first.
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in GetAllNotes controller ", error);
        res.status(500).json({message: "Internal server error."});
    }
}

//Get 
export async function getNoteByID(req, res) {
    try {
        
        const note = await Note.findById(
            req.params.id
        );

        if(!note) return res.status(404).json({ message: "Note not found" });

        res.status(200).json(note);
    } catch (error) {
        console.error("Error in UpdateNote controller ", error);
        res.status(500).json({message: "Internal server error."});
    }
}

//post
export async function createNotes(req, res) {
    try {
        const {title, content} = req.body
        const note = new Note({title, content});
        const savedNote = await note.save();
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in CreateNote controller ", error);
        res.status(500).json({message: "Internal server error."});
    }
}

//push
export async function updateNotes(req, res) {
    try {
        const {title, content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id, {title, content}, {
            new: true,
        });

        if(!updateNote) return res.status(404).json({ message: "Notes not found" });

        res.status(200).json(updateNote);
    } catch (error) {
        console.error("Error in UpdateNote controller ", error);
        res.status(500).json({message: "Internal server error."});
    }
}

//delete
export async function deleteNotes(req, res) {
    try {
        const {title, content} = req.body;
        const deletedNote= await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote) return res.status(404).json({message: "Invalid ID provided"});
        res.status(200).json({message: "Note deleted successfully."});
    } catch (error) {
     console.error("Error in DeleteNote controller ", error);
     res.status(500).json({message: "Internal server error."});   
    }
}