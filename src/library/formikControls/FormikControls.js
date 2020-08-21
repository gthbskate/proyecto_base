import React from 'react';
import Input from './input/Input';
import Textarea from './textarea/Textarea';
import Select from './select/Select';
import RadioButtons from './radioButtons/RadioButtons';
import CheckboxGroup from './checkboxGroup/CheckboxGroup';
import DatePicker from './datePicker/DatePicker';

function FormikControl(props) {

    const { control, ...rest} = props

    switch(control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default:
            return null
    }
}

export default FormikControl