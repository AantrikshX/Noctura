import React from 'react'

const Notification = () => {
  return (
    <div className="
        w-375 bg-[#FFF8E7] rounded-full flex py-2 items-center justify-center

        /* MOBILE FIX */
        max-sm:w-[90vw]
        max-sm:rounded-xl
        max-sm:py-2
    ">
        <h1 className="text-2xl max-sm:text-xl">💡🦉</h1>

        <h1 className="
            text-[#2E2E2E] text-2xl font-bold underline cursor-pointer 

            /* MOBILE FIX */
            max-sm:text-lg
            max-sm:mx-2
            max-sm:text-center
        ">
            Tech that never blinks.
        </h1>

        <h1 className="text-2xl max-sm:text-xl">🦉💡</h1>
    </div>
  )
}

export default Notification
