import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../library/formikControls/FormikControls'

import useStyles from './styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { initialAction } from '../../redux/initialDuck'


function InitialPage() {

    const classes = useStyles();
    const dispatch = useDispatch()
    const infoData = useSelector(store => store.initialConfig.array)
    console.log('infoData: ',infoData)

    const [formValues, setFormValues] = useState(null)

    const dropdownOptions = [
        { key: 'Select an option', value: ''},
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3'}
    ]

    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3'}
    ]

    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3'}
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    }

    const savedValues = {
        email: 'Jhon@Doe.com',
        description: 'Lorem ipsum',
        selectOption: '',
        radioOption: '',
        checkboxOption: '',
        birthDate: new Date()
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required!'),
        description: Yup.string().required('Required!'),
        selectOption: Yup.string().required('Required!'),
        radioOption: Yup.string().required('Required!'),
        checkboxOption: Yup.array().required('Required!'),
        birthDate: Yup.date().required('Required!').nullable()
    })

    const onSubmit = (values, onSubmitProps) => {

        onSubmitProps.resetForm()
        console.log('Form data', values)
        console.log('Saven data', JSON.parse(JSON.stringify(values)))
        dispatch(initialAction())
    }

    return (
        <div className='App'>
            <h1>Hola desde página inicial</h1>

            <Formik 
                initialValues={formValues || initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
                enableReinitialize
            >
                {formik => (
                    <Form>
                        <FormikControl 
                            control='input'
                            type='email' 
                            label='Email' 
                            name='email' 
                        />
                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='description'
                        />
                        <FormikControl 
                            control='select'
                            label='Select a topic'
                            name='selectOption'
                            options={dropdownOptions}
                        />
                        <FormikControl 
                            control= 'radio'
                            label='Radio topic'
                            name='radioOption'
                            options={radioOptions}
                        /> 
                        <FormikControl 
                            control='checkbox'
                            label='Chechkbox topics'
                            name='checkboxOption'
                            options={checkboxOptions}
                        />
                        <FormikControl 
                            control='date'
                            label='Pick a date'
                            name='birthDate'
                        /> 
                        <button 
                            type='button' 
                            onClick={()=>setFormValues(savedValues)}
                        >
                            Load
                        </button>
                        <button type='reset' 
                        >
                                Reset
                        </button>
                        <div className={classes.root}>
                            <Typography variant="h6">Presiona para enviar la información</Typography>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>

            <ul>
                {
                    infoData.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default InitialPage
