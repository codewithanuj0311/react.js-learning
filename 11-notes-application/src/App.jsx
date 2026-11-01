import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, settitle] = useState('');
  const [taskDetails, settaskDetails] = useState('')
  const [data, setdata] = useState([])

  const submitForm = (e)=> {
    e.preventDefault();
    // let dataObj ={};
    // dataObj.title = title;
    // dataObj.taskDetails = taskDetails;
    let newData = [...data];
    newData.push({title, taskDetails})
    setdata(newData);
    settitle('');
    settaskDetails('');
  }
  return (
    <div className='flex p-10 min-h-screen bg-gray-300 text-white font-bold'>
      <div className="flex flex-col w-1/2 bg-gray-700 p-4">
        <form className='flex flex-col w-100% gap-10' onSubmit={(e)=> {
            submitForm(e);
          }}>
          <h1 className="text-xl">Add Task</h1>
          <input type="text" name="taskTitle" id="taskTitle" placeholder='Enter Task Heading' className='border-2 rounded outline-none py-2 px-4' value={title}
          onChange={(e)=> {
            settitle(e.target.value)
          }}/>
          <textarea name="taskDetails" id="taskDetails" cols="30" rows="10" placeholder='Enter task details' className='border-2 rounded outline-none py-2 px-4' value={taskDetails}
          onChange={(e)=> {
            settaskDetails(e.target.value)
          }}>
          </textarea>
          <button className='font-medium bg-black py-2 px-4 outline-none rounded' >Add Task</button>
        </form>
      </div>
      <div className="flex flex-col gap-10 w-1/2 bg-gray-700 p-4 border-l-2 text-black">
        <h1 className="text-xl">Recent Notes</h1>
        {data.map((ele, index)=> {
          return (
            <div className="min-h-50 rounded bg-white p-4" key={index}>
            <h1 className='text-xl'>{ele.title}</h1>
            <hr />
            <p className='text-sm text-gray-600 font-medium mt-4'>{ele.taskDetails}</p>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default App