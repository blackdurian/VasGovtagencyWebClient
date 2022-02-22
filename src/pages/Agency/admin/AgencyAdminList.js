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
    SelectInput, NumberField, ReferenceField
} from 'react-admin';


//TODO : adminFilters
const adminFilters = [
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

export const AgencyAdminList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List title="Agency's Admin" {...props}
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
                    <TextField source="id" label="Username"/>
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="roles" />
                    <BooleanField source="verified" />
                </Datagrid>
            )}
        </List>
    );
};
