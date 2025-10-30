export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-4 mt-10 text-center text-gray-600 text-sm">
      <p>
        © {new Date().getFullYear()} NotesApp by <span className="font-semibold text-blue-600">Ghanshyam</span>
      </p>
    </footer>
  );
}
