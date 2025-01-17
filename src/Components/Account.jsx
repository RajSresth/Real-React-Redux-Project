import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decAmount, incAmount } from '../Action/action.js'

const Account = () => {
    const amount = useSelector(chombu => chombu.account.amount)
    const bonus = useSelector(state => state.bonus.points)
    const dispatch = useDispatch()
    return (
        <div className='w-[50%] h-[100%] flex justify-center items-center'>
            <div className='w-[550px] px-[5rem] py-12 border-black border-[3px]'>
                <h2 className='text-[1.85rem] font-semibold'>Account Child Component</h2>
                <h2 className=' mt-5 text-[1.5rem] font-semibold'>Amount: {amount}</h2>
                <div className='flex flex-col gap-5 mt-8 items-center'>

                    <button className='bg-cyan-400 font-semibold w-[80%] py-3 text-[1.5rem] rounded-md' onClick={() => dispatch(incAmount())}>Increment</button>

                    <button className='bg-red-600 text-white font-semibold w-[80%] py-3 rounded-md text-[1.5rem]' onClick={() => dispatch(decAmount)}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Account