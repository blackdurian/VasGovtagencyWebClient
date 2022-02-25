import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    SelectInput,
    required,
    ReferenceInput,
    NumberInput
} from 'react-admin';



// todo: implement googlemaps/react-wrapper
// todo: useStyle
export const ClinicCreate = (props) => {
    return(
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" validate={required()} />
            <ReferenceInput label="Admin" source="adminId" reference="clinic/admins/selectInput" >
            <SelectInput source="id" />
            </ReferenceInput>
            <TextInput source="suite" validate={required()} />
            <TextInput source="street" validate={required()} />
            <TextInput source="zipcode" validate={required()} />
            <NumberInput  source="longitude" />
            <NumberInput  source="latitude" />
        </SimpleForm>
    </Create>
)};





