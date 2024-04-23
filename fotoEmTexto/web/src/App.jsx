import UploadFoto from "./components/UploadFoto";

function App() {
  return (
    <div className="h-screen flex justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-3xl text-cyan-400 font-bold  mb-5 mt-20">Converta sua foto em <span className="text-cyan-500">texto</span></h1>
        <UploadFoto />
      </div>
    </div>
  );
}

export default App;
