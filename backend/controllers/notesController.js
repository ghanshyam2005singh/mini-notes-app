let notes = []; // temporary in-memory store

export const getNotes = (req, res) => {
  res.json(notes);
};

export const addNote = (req, res) => {
  const { title, desc } = req.body;
  if (!title || !desc)
    return res.status(400).json({ message: "All fields required" });

  const note = { id: Date.now().toString(), title, desc };
  notes.push(note);
  res.json(note);
};

export const deleteNote = (req, res) => {
  const { id } = req.params;
  notes = notes.filter((n) => n.id !== id);
  res.json({ message: "Note deleted" });
};
