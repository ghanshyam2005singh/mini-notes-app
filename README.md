# 📝 Notes App — Next.js + Express

A simple and elegant **full-stack Notes App** built using **Next.js (frontend)** and **Express.js (backend)**.  
Users can **create**, **view**, and **delete** notes — stored either **locally** (via browser LocalStorage) or via **REST API**.

---

## 🚀 Features

- ✏️ Create and delete notes
- 💾 Save notes in browser localStorage (offline mode)
- 🌐 Optional backend API (Express + in-memory data)
- 🧭 Modern UI with TailwindCSS
- 🔔 Toast notifications for actions
- 📱 Fully responsive and mobile-friendly
- 🧱 Modular folder structure (clean code)

---

## 🧩 Tech Stack

### Frontend
- [Next.js 14+](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hot Toast](https://react-hot-toast.com/)

### Backend
- [Express.js](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

---

## 🗂️ Project Structure

```

notes-app/
│
├── frontend/                # Next.js App
│   ├── app/
│   │   ├── page.tsx         # Main Notes UI
│   │   ├── layout.tsx       # Navbar, Footer, Toaster
│   │   ├
│   │   │   
│   │   │   
│   │   └── components/
│   │       └── Footer.tsx
│   │       └── Navbar.tsx
│   
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/                 # Express API
├── server.js
├── routes/
│   └── notesRoutes.js
├── controllers/
│   └── notesController.js
└── package.json

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
````

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
node server.js
```

Backend will run on 👉 **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run on 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧭 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/notes`     | Get all notes   |
| POST   | `/api/notes`     | Create new note |
| DELETE | `/api/notes/:id` | Delete a note   |

### Example (POST)

```json
{
  "title": "Meeting Notes",
  "desc": "Discuss project timeline"
}
```

---

## 💡 LocalStorage Mode

If backend is not running, the app automatically:

* Saves notes in `localStorage`
* Loads notes when browser refreshes
* Works completely offline

---

## ✨ UI Features

* Sticky **Navbar** with navigation
* Clean **Footer**
* Beautiful **toast messages** for success/error
* Fully **responsive** layout (works on mobile and desktop)

---

---

## 🧰 Future Improvements

* ✅ Connect with MongoDB (persistent database)
* 🧑‍💻 User authentication (JWT)
* 🔍 Search & filter notes
* 🌗 Dark mode toggle
* 📅 Edit existing notes

---

## 👨‍💻 Author

**Ghanshyam Singh**
💼 B.Tech CSE | Lucknow University
📧 [ghanshyam2005singh@gmail.com](mailto:ghanshyam2005singh@gmail.com)
💬 Built with ❤️ using Next.js and Express

---