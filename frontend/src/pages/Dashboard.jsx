import { useState, useEffect, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getProfile();
    getTasks();
  }, []);

  const getProfile = async () => {
    const res = await api.get("/api/users/profile");
    setUser(res.data);
  };

  const getTasks = async () => {
    const res = await api.get("/api/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return alert("Enter a task");
    if (editId) {
      await api.put(`/api/tasks/${editId}`, { title });
      setEditId(null);
    } else {
      await api.post("/api/tasks", { title });
    }
    setTitle("");
    getTasks();
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await api.delete(`/api/tasks/${id}`);
    getTasks();
  };

  const editTask = (task) => {
    setTitle(task.title);
    setEditId(task._id);
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">

      {/* Container */}
      <div className="max-w-4xl mx-auto">

        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold">
            Welcome, {user?.name} 
          </h2>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-5 text-white">
            <p className="text-sm opacity-80">Total Tasks</p>
            <h2 className="text-3xl font-bold">{tasks.length}</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-5 text-white">
            <p className="text-sm opacity-80">User</p>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
          </div>

          <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-5 text-white">
            <p className="text-sm opacity-80">Status</p>
            <span className="text-green-300 font-bold">Active</span>
          </div>

        </div>

        {/* Add Task */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">
            {editId ? "✏ Edit Task" : "➕ Add Task"}
          </h3>

          <div className="flex gap-3">
            <input
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              onClick={addTask}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg shadow transition"
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </div>

        {/* Search */}
        <input
          className="w-full mb-5 p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.map((t) => (
            <div
              key={t._id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow hover:shadow-xl transition border"
            >
              <span className="font-medium">{t.title}</span>

              <div className="flex gap-4">
                <button
                  onClick={() => editTask(t)}
                  className="text-blue-500 hover:scale-110 transition"
                >
                  ✏
                </button>

                <button
                  onClick={() => deleteTask(t._id)}
                  className="text-red-500 hover:scale-110 transition"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <p className="text-center text-white opacity-80 mt-5">
              No tasks found 
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
