import React from 'react'
import useFetch from './useFetch';
import './App.css'

function App() {
  const { data, loading, error } = useFetch(
    "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json"
  );
  
  console.log(data);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className='dark bg-black'>
<div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Color List
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {data && Object.entries(data).map(([name, hex]) => (
          <div
            key={name}
            className="w-40 h-32 rounded-lg shadow-lg flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: hex }}
          >
            <span className="font-semibold capitalize">{name}</span>
            <span className="text-sm">{hex}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default App
