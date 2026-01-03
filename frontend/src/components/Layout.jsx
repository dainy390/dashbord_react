export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6 text-blue-600">
          Task Manager
        </h2>

        <ul className="space-y-3">
          <li className="cursor-pointer hover:text-blue-600">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-600">Profile</li>
          <li className="cursor-pointer hover:text-blue-600">Settings</li>
        </ul>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}
