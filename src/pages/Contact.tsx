import React, {useRef} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import emailjs from 'emailjs-com'

import {Layout} from '@/core'

type Inputs = {
  name: string
  email: string
  message: string
}
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    const form = e.target
    console.log(data)
    emailjs
      .sendForm(
        'service_ngum7gm',
        'contact',
        form.current,
        'user_sn4R7nQ9vRWZFgkzONumK'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.reset()
    const fadeEffect = setInterval(function () {
      if (!form.style.opacity) {
        form.style.opacity = 1
      }
      if (form.style.opacity > 0) {
        form.style.opacity -= 0.1
        setTimeout(() => {
          form.style.display = 'none'
        }, 750)
      } else {
        clearInterval(fadeEffect)
      }
    }, 75)
  }

  const form = useRef()

  return (
    <Layout title="Contact">
      <div className="page contact min-h-screen pt-7">
        <h2>Contact</h2>
        <form
          id="contact-form"
          className="mb-5"
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
        >
          <p>I&apos;ll get back as soon as possible.</p>

          {/* register your input into the hook by invoking the "register" function */}
          <div className="pb-5">
            <label>
              Name
              {errors.name && (
                <span className="pl-1 font-black text-red-500">*</span>
              )}
            </label>
            <input
              className="mt-1 w-full rounded-md border-2 border-gray-300 px-4 py-3"
              type="text"
              {...register('name', {required: true})}
            />
          </div>
          <div className="pb-5">
            <label>
              Email
              {errors.email && (
                <span className="pl-1 font-black text-red-500">*</span>
              )}
            </label>
            <input
              className="mt-1 w-full rounded-md border-2 border-gray-300 px-4 py-3"
              type="email"
              {...register('email', {required: true})}
            />
          </div>
          <div className="pb-5">
            <label>
              Message
              {errors.message && (
                <span className="pl-1 font-black text-red-500">*</span>
              )}
            </label>
            <textarea
              className="mt-1 w-full rounded-md border-2 border-gray-300 px-4 py-3"
              rows={6}
              {...register('message', {required: true})}
            />
          </div>
          <div className="pb-5 text-right">
            <input
              className="button cursor-pointer rounded-md bg-gray-200 py-2 px-4 text-center font-light"
              type="submit"
            />
          </div>
        </form>
        <p id="thank-you-msg" className="opacity-0">
          Thank you, your message was sent.
        </p>
      </div>
    </Layout>
  )
}
