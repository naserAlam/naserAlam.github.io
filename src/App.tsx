import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Naser Alam
        </h1>
        <p className="text-slate-400 text-lg font-mono">
          [ Software Engineer | Portfolio 2026 ]
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-cyan-400 transition-colors">
            Projects
          </button>
          <button className="px-6 py-2 border border-slate-700 rounded-md hover:border-white transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}