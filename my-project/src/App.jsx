import React from "react"

export default function App() {
  return (
    <div>

      <nav className="flex items-center justify-between flex-wrap bg-red-400 p-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-xl" >Kalvium</span>
        </div>
        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-glow">
          <a href="" className="block mt-5 sm:inline-block sm:mt-0 text-green-300 mr-3">About us</a>
          <a href="" className="block mt-5 sm:inline-block sm:mt-0 text-green-300 mr-3">Contacts</a>
          <a href="" className="block mt-5 sm:inline-block sm:mt-0 text-green-300 mr-3">Courses</a>
        </div>

        <div>
          <a href="" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Login</a>
        </div>
        </div>
      </nav>
      <div className="mt-5 mx-auto py-2">
        <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded">Button</button>
        <div className="bg-red-300 border-re-400 text-red-700 px-4 py-3">
          <strong className="font-bold">Alert!</strong>
          <span className="block sm:inline">This is Awesome!</span>

        </div>
      </div>
      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-12 w-12" />
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900">Kalvium Store</h4>
          <p className="text-base text-gray-600">You Hvae A New Course</p>
        </div>
      </div>
      <footer className="bg-gray-200 text-center lg:text-left">
        <div className="text-gray-700 text-center py-4">
          @2021 Copyright:
        </div>
      </footer>
    </div>
  )
}