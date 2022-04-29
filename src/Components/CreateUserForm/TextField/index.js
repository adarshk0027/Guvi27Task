import React from 'react'
import {TextField} from '@material-ui/core'
import {useField} from "formik"
function TextFieldWrapper({
    name,
   ...otherProps
}) 
{
    const [FieldProps,meta]=useField(name)
    const TextFieldConfig={
        ...FieldProps,
        ...otherProps,
        variant:"outlined",
        fullWidth :true,
        multiline :true,
        maxRows:4
          
    }
    if(meta && meta.touched && meta.error){
        TextFieldConfig.error=true
        TextFieldConfig.helperText=meta.error;
    }
  return (
    <TextField {...TextFieldConfig}></TextField>
  )
}

export default TextFieldWrapper