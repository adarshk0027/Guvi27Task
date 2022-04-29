import React, { useContext } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form, Formik, useFormik } from 'formik'
import TextField from '../CreateUserForm/TextField'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}))

const INITIAL_STATE = {
  id: Date.now(),
  ProductName: '',
  Catogery: '',
  Price: '',
  Image: '',
  About: '',

}
const VALIDATION_SCHEMA = Yup.object().shape({
  ProductName: Yup.string().required('Required'),
  Catogery: Yup.string()
    .required('Required'),
  Price: Yup.string().required(),
  Image: Yup.string().required(),
  About: Yup.string().required(),
  
})

function CreateUserForm () {
  const classes = useStyles()
  const { AddUser } = useContext(GlobalContext)
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: INITIAL_STATE,
    onSubmit: values => {
      AddUser(values)
      Navigate('/')
    }
  })

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: 'blue' }}>User Creation Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md' spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              <Formik
                onSubmit={formik.onSubmit}
                initialValues={INITIAL_STATE}
                validationSchema={VALIDATION_SCHEMA}
              >
                {({}) => {
                  return (
                    <Form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField name='id' label='ID'></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='ProductName'
                            label='ProductName'
                            key='ProductName'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.ProductName}
                          ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='Catogery'
                            label='Catogery'
                            key='Catogery'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Catogery}
                          ></TextField>
                        </Grid>
                      
                        <Grid item xs={4}>
                          <TextField
                            name='Price'
                            label='Price'
                            key='Price'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Price}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name='Image'
                            label='Image'
                            key='Image'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Image}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name='About'
                            label='About'
                            key='About'
                            multiline={true}
                            rows={4}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.About}
                          ></TextField>
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
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateUserForm
