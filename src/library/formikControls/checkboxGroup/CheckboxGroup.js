import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../textError/TextError'
import useStyles from './styles'

function RadioButtons(props) {

    const {label, name, options, ...rest} = props
    const classes = useStyles()

    return (
        <div className={classes.formControl}>
            <label>
                {label}
            </label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                        type='checkbox' 
                                        id={option.value} 
                                        {...field} 
                                        value={option.value} 
                                        checked={field.value.includes(option.value)} 
                                        className={classes.checkbox} 
                                    />
                                    <label htmlFor={option.value}>
                                        {option.key}
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButtons