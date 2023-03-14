import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(null);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          e.target.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact' className='w-full mx-auto mt-20 md:w-5/6 pb-10'>
      <h3 className='text-center text-3xl font-bold mb-4 dark:text-pink-600 md:text-4xl'>
        Contact
      </h3>
      <p className='text-2xl text-center text-gray-800 mb-6 dark:text-gray-400'>
        If you'd like to get in touch, feel free to send a message.
      </p>
      <form
        onSubmit={sendEmail}
        className='w-full lg:w-3/5 mx-auto flex flex-col gap-4'
        ref={form}
      >
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-2xl font-medium dark:text-pink-600 '
          >
            Name
          </label>
          <input
            type='text'
            className='p-3 text-xl rounded-lg outline-none'
            name='from_name'
          />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='email'
            className='text-2xl font-medium dark:text-pink-600'
          >
            Email
          </label>
          <input
            type='email'
            className='p-3 text-xl rounded-lg outline-none'
            name='reply_to'
          />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-2xl font-medium dark:text-pink-600'
          >
            Message
          </label>
          <textarea
            name='message'
            cols='30'
            rows='8'
            className='p-4 text-xl rounded-lg outline-none'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-gradient-to-r from-pink-600 to-pink-700 text-slate-200 font-semibold px-4 py-2 rounded-lg text-xl'
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
