import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from '../textError/TextError'
import useStyles from './styles'

function DatePicker(props) {

    const {label, name, ...rest} = props
    const classes = useStyles()

    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>
                {name}
            </label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const { setFieldValue } = form
                        const { value } = field
                        
                        return (
                            <DateView 
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePicker
