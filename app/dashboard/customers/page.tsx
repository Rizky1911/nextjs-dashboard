import React from 'react'
import CustomersTable from '@/app/customers/table'
import { customers } from '@/app/lib/placeholder-data'

const customer = customers;

const page = () => {
  return (
    <div>
      <p>Customers Page</p>
      {/* <CustomersTable customers={customer}/> */}
    </div>
  )
}

export default page