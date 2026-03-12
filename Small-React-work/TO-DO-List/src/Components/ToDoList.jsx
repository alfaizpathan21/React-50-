import React, { useState } from 'react'

const ToDoList = () => {
    const [TODo,setToDO]=useState([])
    const [inputValue,setInputValue]=useState('')

    const handleSubmit=(e)=>{
    e.preventDefault()

        if(inputValue.trim()){
            setToDO([...TODo,inputValue])
            setInputValue('')
        }
    }

    const handleChange=e=>{
        setInputValue(e.target.value)
    }


  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
        To-Do List
      </h1>
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/50">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-3">
            <input 
              type="text" 
              onChange={handleChange} 
              placeholder="Add To Do" 
              value={inputValue}
              className="flex-1 px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300 placeholder-gray-500 shadow-sm hover:shadow-md"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              Add
            </button>
          </div>
        </form>
        <ul className="space-y-3">
          {TODo.map((todo, index) => (
            <li 
              key={index} 
              className="group flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="text-lg font-medium text-gray-800 flex-1 truncate pr-4">
                {todo}
              </span>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="p-2 text-green-500 hover:text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-200">
                  ✓
                </button>
                <button className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                  ✏️
                </button>
                <button className="p-2 text-red-500 hover:text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200">
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
        {TODo.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl text-gray-500 font-medium">No tasks yet. Add one above!</p>
          </div>
        )}
      </div>
    </div>
  </div>
)

}

export default ToDoList
