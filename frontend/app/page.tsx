"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!title || !desc) {
      toast.error("Please fill all fields!");
      return;
    }
    const newNote = { id: Date.now().toString(), title, desc };
    setNotes([newNote, ...notes]);
    setTitle("");
    setDesc("");
    toast.success("Note added successfully!");
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
    toast.success("Note deleted!");
  };

  return (
    <main className=" flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📝 Notes App</h1>

      <div className="bg-white p-4 rounded-xl shadow w-full max-w-md mb-6">
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-3 rounded"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Note
        </button>
      </div>

      <div className="grid gap-4 w-full max-w-md">
        {notes.length === 0 ? (
          <p className="text-gray-500 text-center">No notes yet</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-lg">{note.title}</h3>
                <p className="text-gray-600">{note.desc}</p>
              </div>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
