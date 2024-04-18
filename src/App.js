import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-500 bg-opacity-80 shadow-lg animate-fadeIn">
    <h1 className="text-3xl font-bold mb-8 text-orange-700">Random Password Generator</h1>
<PasswordGenerator />
  </div>
 
   
  );
}

export default App;
