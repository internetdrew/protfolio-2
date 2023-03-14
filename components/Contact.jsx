const Contact = () => {
  return (
    <section className='w-full mx-auto mt-20 md:w-5/6 pb-10'>
      <h3 className='text-center text-3xl font-bold mb-4 dark:text-pink-600 md:text-4xl'>
        Contact
      </h3>
      <p className='text-2xl text-center text-gray-800 mb-6 dark:text-gray-400'>
        Thank you for visiting my portfolio! If you'd like to get in touch, feel
        free to send a message.
      </p>
      <form action='' className='w-full lg:w-3/5 mx-auto flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-2xl font-medium dark:text-pink-600 '
          >
            Name
          </label>
          <input type='text' className='p-3 text-xl rounded-lg outline-none' />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-2xl font-medium dark:text-pink-600'
          >
            Email
          </label>
          <input type='email' className='p-3 text-xl rounded-lg outline-none' />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-2xl font-medium dark:text-pink-600'
          >
            Message
          </label>
          <textarea
            name=''
            id=''
            cols='30'
            rows='8'
            className='p-4 text-xl rounded-lg outline-none'
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
