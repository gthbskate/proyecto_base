import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../textError/TextError'
import useStyles from './styles'

function Input(props) {

    const { label, name, ...rest} = props
    const classes = useStyles()

    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>
                {label}
            </label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
