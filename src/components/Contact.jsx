import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required before sending.' }),
  email: z
    .string()
    .email({ message: 'Please add a valid email address before sending.' }),
  message: z
    .string()
    .min(1, { message: 'Please add a message before sending.' }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful, isSubmitting, isSubmitted },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const sendEmail = async formValues => {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
      formValues,
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    );
    toast.success('👍🏾 Successfully sent. Thanks!');
  };

  return (
    <section id='contact' className='w-full mx-auto mt-20 md:w-5/6 pb-10'>
      <h3 className='text-center text-3xl font-bold mb-4 dark:text-[#2AD5EF] md:text-4xl'>
        Contact
      </h3>
      <p className='text-2xl text-center text-gray-800 mb-6 dark:text-slate-200'>
        If you'd like to get in touch, feel free to send a message.
      </p>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className='w-full lg:w-3/5 mx-auto flex flex-col gap-4 caret-pink-500'
      >
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='name'
            className='text-xl font-medium dark:text-cyan-400 '
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            className='p-3 text-xl rounded-lg outline-none focus:outline-slate-900 dark:focus:outline-cyan-400 shadow-lg'
            {...register('name')}
          />
          <small className='dark:text-cyan-400 text-sm mt-1'>
            {errors?.name?.message}
          </small>
        </div>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='email'
            className='text-xl font-medium dark:text-cyan-400'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='p-3 text-xl rounded-lg outline-none shadow-lg focus:outline-slate-900 dark:focus:outline-cyan-400'
            {...register('email')}
          />
          <small className='dark:text-cyan-400 text-sm mt-1'>
            {errors?.email?.message}
          </small>
        </div>
        <div className='flex flex-col gap-1'>
          <label
            htmlFor='message'
            className='text-xl font-medium dark:text-cyan-400'
          >
            Message
          </label>
          <textarea
            cols='30'
            rows='8'
            id='message'
            className='p-4 text-xl rounded-lg outline-none shadow-lg focus:outline-slate-900 dark:focus:outline-cyan-400'
            {...register('message')}
          />
          <small className='dark:text-cyan-400 text-sm mt-1'>
            {errors?.message?.message}
          </small>
        </div>
        <button
          type='submit'
          className='bg-slate-900 text-slate-200 font-semibold px-4 py-2 rounded-lg text-xl shadow-lg hover:bg-cyan-500 duration-300 dark:bg-[#2FD5EE] dark:text-slate-900'
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
