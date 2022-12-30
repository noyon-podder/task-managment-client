import React from 'react';

const AddTask = () => {
    return (
        <div className='w-3/4 mx-auto'>
        <h2 className='text-center text-indigo-600 my-4 text-2xl font-semibold'>Add Task</h2>
      <form>
      <div class="mb-6">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter Your Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          placeholder="Enter your title"
          required
        />
      </div>
      <div class="mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>

        <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

      </div>

      <div class="mb-6">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:indigo-blue-500 dark:bg-indigo-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-indigo-500" placeholder="Your message..."></textarea>
      </div>
      
      <button
        type="submit"
        class="text-white bg-indigo-600 hover:bg-[var(--main-color)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
      >
        Submit
      </button>
    </form>
      </div>
    );
};

export default AddTask;