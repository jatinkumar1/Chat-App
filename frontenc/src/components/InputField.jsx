import React from 'react'

function InputField(props) {
  return (
    <div>
        <div className="">
            <label htmlFor={props.for} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{props.for}</label>
            <input
              type={props.type}
              id={props.for}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
              required
            />
          </div>
    </div>
  )
}

export default InputField