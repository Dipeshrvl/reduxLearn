import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export default function Shop() {
  const dispatch = useDispatch()
  const {depositeMoney ,withdrawMoney} = bindActionCreators(actionCreators,dispatch);

  return (
    <div className='my-2 mt-4'>
      <h2>Withdraw/Deposite Money</h2>
      {/* <button className='btn btn-primary my-2' onClick={() => {
        dispatch(actionCreators.withdrawMoney(100))
      }}> - </button>
      Update Balance
      <button className='btn btn-primary mx-2 my-2' onClick={() => {
        dispatch(actionCreators.depositeMoney(100))
      }}> + </button> */}

      <button className='btn btn-primary my-2 mx-3' onClick={() => {
        withdrawMoney(100)
      }}> - </button>
      Update Balance
      <button className='btn btn-primary mx-2 my-2' onClick={() => {
        depositeMoney(100)
      }}> + </button>
    </div>
  )
}
