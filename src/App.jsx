import React from 'react'
import Account from './Components/Account'
import Bonus from './Components/Bonus'
import "./App.css"
import { useSelector } from 'react-redux'

const App = () => {
  const amount = useSelector(chombu => chombu.account.amount)
  const bonus = useSelector(state => state.bonus.points)
  return (
    <div className='w-[100vw] h-[100vh]'>
      <div className='flex flex-col justify-center items-center w-[100%] h-[30%] bg-purple-300'>
        <h1 className='text-[2.5rem] font-bold'>Parent Component</h1>
        <h2 className='text-[2rem] font-semibold'>Amount:{amount}</h2>
        <h2 className='text-[2rem] font-semibold'>Bonus Points: {bonus}</h2>
      </div>
      <div className='h-[70%] flex'>
        <Account />
        <Bonus />
      </div>
    </div>
  )
}

export default App