import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import './index.css'
function ProductItem ({ Image, ProductName ,Price,About,Catogery,id}) {
  const {DeleteUser}=useContext(GlobalContext);
 console.log(DeleteUser);
  return (
    <div className='UserProfile bg-white '>
      <div className='profileContainer mx-auto rounded'>
        <div className='img rounded bg-light mx-auto'>
          <img    src={Image} alt='' />
        </div>
        <div className='name'>
          <h5 className='text-primary'>{ProductName} <span>(</span>{Catogery} <span>)</span></h5>
        </div>
        <div className="price">
        <h5 className='text-danger'><span>$</span>{Price}</h5>
        <small>{About}</small>
        </div>
        <div className='buttons d-flex   Link'>
          <Link className=' btn-warning rounded Link' to={`/edit${id}`}>
            <strong>Edit</strong>
          </Link>
          <button className=' btn-danger rounded Link' 
          onClick={()=>{
            alert(`Do You Want To Delete  ${ProductName}`)
            DeleteUser(id)
          }}
          >
            <strong>Delete</strong>
          </button>
        </div>
        
  
      </div>
    </div>
  )
}

export default ProductItem
