import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
    SimpleList,
    List,
    Datagrid,
    EmailField,
    TextField,
    BooleanField,
    TextInput,
    ReferenceInput,
    SelectInput, NumberField
} from 'react-admin';


//TODO : clinicFilters
const clinicFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
        // TODO: quick filter
        // <SelectInput source="roles" label="Roles"       choices={[
        //     {
        //         id: 'ROLE_CLINIC_ADMIN',
        //         name: 'Clinic Admin',
        //     },
        //     {
        //         id: 'ROLE_CLINIC_DOCTOR',
        //         name: 'Clinic Doctor',
        //     }
        // ]}
        // />
   ,
];

export const ClinicList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List title="Clinic" {...props}
              // filters={clinicFilters}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.email}
                />
            ) : (
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="admin" />
                    <TextField source="suite" />
                    <TextField source="street" />
                    <TextField source="zipcode" />
                    <NumberField source="longitude" />
                    <NumberField source="latitude" />
                </Datagrid>
            )}
        </List>
    );
};
