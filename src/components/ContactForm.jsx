import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const ContactForm = ({ buttonClass, setStatus }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const { error } = await supabase.from('contact_form').insert([{ name, email, subject, message }]);
    if (error) {
      setStatus('Something went wrong, please try again.');
    } else {
      setStatus('Your message has been sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto bg-customDark p-6 rounded-lg">
      {['name', 'email', 'subject', 'message'].map((field, idx) => (
        <input
          key={idx}
          type={field === 'email' ? 'email' : 'text'}
          name={field}
          placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
          value={formData[field]}
          onChange={handleInputChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-customSecondary bg-customDark"
        />
      ))}
      <button type="submit" className={`${buttonClass} w-auto px-6 py-3`}>Send Message</button>
    </form>
  );
};

export default ContactForm;
