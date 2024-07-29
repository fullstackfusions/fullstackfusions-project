import React from 'react';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json_data = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: json_data,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Error sending message. Please try again later.");
      console.log("Error", data);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={onSubmit} className='flex flex-col max-w-[600px] w-full pt-10'>
        <div className='pb-8'>
          <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - fullstackfusions@gmail.com</p>
        </div>
        <div className='flex flex-col'>
          <div className='pb-4'>
            <input className='w-full bg-[#ccd6f6] p-2 rounded' type="text" placeholder='Name' name='name' required />
          </div>
          <div className='pb-4'>
            <input className='w-full bg-[#ccd6f6] p-2 rounded' type="email" placeholder='Email' name='email' required />
          </div>
          <div className='pb-4'>
            <textarea className='w-full bg-[#ccd6f6] p-2 rounded' name="message" rows="10" placeholder='Message' required />
          </div>
        </div>
        <button type="submit" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded'>
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contact;
