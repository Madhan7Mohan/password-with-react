// import React, { useState } from 'react';

// const PasswordGenerator = () => {
//   const [password, setPassword] = useState('');
//   const [length, setLength] = useState(10);
//   const [includeUppercase, setIncludeUppercase] = useState(false);
//   const [includeNumbers, setIncludeNumbers] = useState(false);
//   const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

//   const generatePassword = () => {
//     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const numberChars = '0123456789';
//     const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

//     let chars = lowercaseChars;
//     if (includeUppercase) chars += uppercaseChars;
//     if (includeNumbers) chars += numberChars;
//     if (includeSpecialChars) chars += specialChars;

//     let generatedPassword = '';
//     for (let i = 0; i < length; i++) {
//       generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
//     }

//     setPassword(generatedPassword);
//   };

//   const handleSliderChange = (e) => {
//     setLength(parseInt(e.target.value));
//   };

//   return (
//     <div className="bg-blue-200 p-8 rounded-lg w-96 mx-auto mt-10">
//       <div>
//         <label htmlFor="length">Password Length: </label>
//         <input
//           type="range"
//           id="length"
//           min="10"
//           max="20"
//           value={length}
//           onChange={handleSliderChange}
//           className="w-full mt-2 appearance-none h-1 rounded bg-blue-500"
//         />
//         <span>{length}</span>
//       </div>
//       <div className="mt-4">
//         <input
//           type="checkbox"
//           id="uppercase"
//           checked={includeUppercase}
//           onChange={(e) => setIncludeUppercase(e.target.checked)}
//           className="mr-2"
//         />
//         <label htmlFor="uppercase">Include Uppercase</label>
//       </div>
//       <div className="mt-2">
//         <input
//           type="checkbox"
//           id="numbers"
//           checked={includeNumbers}
//           onChange={(e) => setIncludeNumbers(e.target.checked)}
//           className="mr-2"
//         />
//         <label htmlFor="numbers">Include Numbers</label>
//       </div>
//       <div className="mt-2">
//         <input
//           type="checkbox"
//           id="specialChars"
//           checked={includeSpecialChars}
//           onChange={(e) => setIncludeSpecialChars(e.target.checked)}
//           className="mr-2"
//         />
//         <label htmlFor="specialChars">Include Special Characters</label>
//       </div>
//       <button onClick={generatePassword} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//         Generate Password
//       </button>
//       <div className="mt-4 text-xl font-bold">{password}</div>
//     </div>
//   );
// };

// export default PasswordGenerator;



// /* with out clicking generate password  using use state */
import React, { useState, useEffect } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
    
  }, [length, includeUppercase, includeNumbers, includeSpecialChars]);

  return (

    
    <div className="bg-blue-200 p-8 rounded-lg w-96 mx-auto mt-10">
      <div>
        <label htmlFor="length">Password Length: </label>
        <input
          type="range"
          id="length"
          min="10"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full mt-1 appearance-none h-1 rounded bg-green-500"
        />
        <span>{length}</span>
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          id="uppercase"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="uppercase">Include Uppercase</label>
      </div>
      <div className="mt-2">
        <input
          type="checkbox"
          id="numbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="mt-2">
        <input
          type="checkbox"
          id="specialChars"
          checked={includeSpecialChars}
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="specialChars">Include Special Characters</label>
      </div>
      
      <div class="box-content  h-13 w-35 
               bg-green-500 m4 hover:box-content">
      <div className="mt-4 text-center text-xl font-bold">{password}</div>
</div>

   
    </div>
  );
};

export default PasswordGenerator;

