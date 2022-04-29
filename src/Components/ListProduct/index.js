import React, { useContext } from 'react'
import ProductItem from '../Product'
import { GlobalContext } from '../Context/GlobalContext'
function ListProduct () {
  const { Users } = useContext(GlobalContext)
  console.log(Users)

  return (
    <div>
      <div className='List-head'>
        <h3>Product List is Here....</h3>
      </div>
      <div className='lists '>
       {
         Users ? Users.map((user,pos)=>{
           return <ProductItem key={pos}
             Image={user.Image}
             ProductName={user.ProductName}
             Price={user.Price}
             About={user.About}
             Catogery={user.Catogery}
             id={user.id}
             ></ProductItem>
         })
         :""
       }

      </div>
    </div>
  )
}

export default ListProduct
