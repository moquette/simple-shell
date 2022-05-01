import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {Layout} from '@/systems/core'

type Inputs = {
  name: string
  email: string
  message: string
}
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('email')) // watch input value by passing the name of it
  return (
    <Layout title="Contact">
      <div className="page contact pt-7">
        <h2>Contact</h2>
        <p>I&apos;ll get back as soon as possible.</p>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div>
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
          <div>
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
          <div>
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
          <input className="button float-right" type="submit" />
        </form>
      </div>
    </Layout>
  )
}
