

import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <div className='w-full bg-gray-800 py-[130px]'>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

