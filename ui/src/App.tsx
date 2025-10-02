import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="flex items-center gap-6 px-8 py-4 bg-blue-700 shadow text-white text-lg font-semibold rounded-b-lg">
          <Link className="hover:text-blue-200 transition" to="/">Home</Link>
          <Link className="hover:text-blue-200 transition" to="/visualizer">Visualizer</Link>
        </nav>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold text-blue-700">Home Page</h1>} />
            <Route path="/visualizer" element={<Visualizer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;