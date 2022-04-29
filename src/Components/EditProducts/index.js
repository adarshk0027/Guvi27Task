import React, { useContext, useState, useEffect } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../Context/GlobalContext'
import { useParams ,useNavigate} from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}))

const INITIAL_STATE = {
  id: '',
  ProductName: '',
  Catogery: '',
  Price: '',
  Image: '',
  About: ''
  
}

function EditProducts () {
  const classes = useStyles()
  const { Id } = useParams()
  const Navigate=useNavigate()
  console.log(Id);
  const { Users ,EditUser} = useContext(GlobalContext)
  const [Form_Field_Value, SetFormValue] = useState(INITIAL_STATE)

  const handleChange = e => {
    SetFormValue({ ...Form_Field_Value, [e.target.name]: e.target.value })
  }

  const handleSubmit=()=>{
    EditUser(Form_Field_Value)
    Navigate('/')
    
}

  useEffect(() => {
    const CurrentUser = Users.find(user => {
      return user.id === Number(Id)
    })
    console.log(CurrentUser)
    SetFormValue(CurrentUser)
  }, [Id, Users])
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: 'blue' }}>Edit Profile Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md' spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input type='text' 
                    placeholder='ID'
                    name="id"
                    readOnly={Form_Field_Value.id}
                    
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      placeholder='FirstName'
                      className='form-control'
                      name="ProductName"
                      defaultValue={Form_Field_Value.ProductName}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      placeholder='Catogery'
                      className='form-control'
                      name="Catogery"
                      defaultValue={Form_Field_Value.Catogery}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  
                  <Grid item xs={4}>
                    <input
                      type='text'
                      placeholder='Price'
                      className='form-control'
                      name="Price"
                      defaultValue={Form_Field_Value.Price}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type='text'
                      placeholder='Image'
                      className='form-control'
                      name="Image"
                      defaultValue={Form_Field_Value.Image}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  <Grid item xs={12}>
                    <textarea
                      placeholder='About'
                      rows={4}
                      cols={130}
                      name="About"
                      defaultValue={Form_Field_Value.About}
                      onChange={handleChange}
                    ></textarea>
                  </Grid>
                  <Grid item xs={6}>
                    <button
                      type='submit'
                      className='bg-primary w-100 text-white'
                    >
                      Submit
                    </button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditProducts
