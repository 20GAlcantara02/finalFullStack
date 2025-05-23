// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Task Tracker</h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay organized, stay productive. Manage your tasks in one place.
        </p>
        <a
          href="/tasks"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View Tasks
        </a>
      </div>

      <div className="mt-16 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Today's Tasks</h2>
        <ul className="bg-white rounded shadow p-4 space-y-2">
          <li className="border-b pb-2">✅ Finish wireframe designs</li>
          <li className="border-b pb-2">🕒 Review pull requests</li>
          <li>✍️ Write documentation</li>
        </ul>
      </div>
    </main>
  );
}
