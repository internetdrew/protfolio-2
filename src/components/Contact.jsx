'use client';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect } from 'react';

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
    submittedData,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const sendEmail = formValues => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        formValues,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        res => {
          console.log(res);
        },
        error => {
          console.error(error.text);
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
        onSubmit={handleSubmit(sendEmail)}
        className='w-full lg:w-3/5 mx-auto flex flex-col gap-4'
      >
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-xl font-medium dark:text-pink-600 '
          >
            Name
          </label>
          <input
            type='text'
            className='p-3 text-xl rounded-lg outline-none shadow-lg'
            {...register('name')}
          />
          <small className='dark:text-pink-600 text-sm mt-1'>
            {errors?.name?.message}
          </small>
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='email'
            className='text-xl font-medium dark:text-pink-600'
          >
            Email
          </label>
          <input
            type='email'
            className='p-3 text-xl rounded-lg outline-none shadow-lg'
            {...register('email')}
          />
          <small className='dark:text-pink-600 text-sm mt-1'>
            {errors?.email?.message}
          </small>
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='message'
            className='text-xl font-medium dark:text-pink-600'
          >
            Message
          </label>
          <textarea
            cols='30'
            rows='8'
            className='p-4 text-xl rounded-lg outline-none shadow-lg'
            {...register('message')}
          />
          <small className='dark:text-pink-600 text-sm mt-1'>
            {errors?.message?.message}
          </small>
        </div>
        <button
          type='submit'
          className='bg-gradient-to-r from-pink-600 to-pink-700 text-slate-200 font-semibold px-4 py-2 rounded-lg text-xl shadow-lg'
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
