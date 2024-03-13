import React from 'react'
import css from './Order.module.css'
import data from '../mock_data/orderData.json'
import CardOrder from './CardOrder'

function Order() {
  return (
    <div className={css.main}>
      <h1 className={css.titleCtn}>Orders</h1>
      <div className={css.cardCtn}>
        {data.map((mock)=><CardOrder key={mock.name} mock={mock}/>)}
      </div>
    </div>
  )
}

export default Order