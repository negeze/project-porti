import React from 'react'
import { useState } from 'react'
function feedback() {

  return (
    <div>

      <div className=' text-white bg-gradient-to-r from-lime-600 via-sky-700 to-orange-600 tw-dir-rtl'>
        <div className='sm:flex justify-evenly py-10'>
          <div className='pt-10 '>
            <div className='border border-gray-300 py-4 px-20 '>
              <p className='px-16 py-2'>customer 1</p>
              <h1 className='text-6xl hover:text-red-500'>"the service <br />
                <span className='text-6xl px-14'>was </span><br />
                <span className='text-6xl'>very good"</span>
              </h1>
            </div>
          </div>
          <div class="">
            <div className=' sm:rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
              <div className='py-4 px-10 pr-14'>
                <div className='bg-white text-fuchsia-950 py-3 px-10 text-2xl font-semibold'>Send your feedback</div>
              </div>
              <form className=''>
                <div className='py-4 px-10'>
                  <label className='text-2xl font-semibold pr-10'>Name</label>
                  <input className='px-14 py-1' type='text' name='name' /><br />
                </div>
                <div className='py-4 px-10'>
                  <label className='text-xl pr-14'>Email</label>
                  <input className='px-14 py-1' type='email' name='email' /><br />
                </div>
                <div className='py-4 px-10 pb-20 flex justify-normal'>
                  <div className=''>
                    <label className='text-xl pr-6'>Message</label>
                  </div>
                  <textarea className='px-12' type='text' name='message' rows='3' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default feedback