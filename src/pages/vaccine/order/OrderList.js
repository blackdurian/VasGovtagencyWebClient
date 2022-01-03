import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    NumberField,
    ReferenceField,
    EditButton,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

//TODO: filter vaccine
const Filter = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const OrderList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} sort={{ field: 'name', order: 'DESC' }}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.doseRequire} Dose Require`}
                    tertiaryText={record => record.mfgCompany}
                />
            ) : (
                <Datagrid>
                    <TextField source="name" />
                    <NumberField source="doseRequire" label="Dose Require"/>
                    <NumberField source="dosesPerVial" label="Doses Per Vial"/>
                    <TextField source="mfgCompany" />
                    <NumberField source="storageTempUpperBound" label="StorageTempUpperBound Celsius"  />
                    <NumberField source="storageTempLowerBound" label="storageTempLowerBound Celsius" />
                    <NumberField source="maxStorageDays" />
                </Datagrid>
            )}
        </List>
    );
}


