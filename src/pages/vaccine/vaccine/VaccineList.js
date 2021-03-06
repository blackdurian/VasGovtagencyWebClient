import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    NumberField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput, DateField, ArrayField, ReferenceField,
} from 'react-admin';

//TODO: filter vaccine
const Filter = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const VaccineList = (props) => {
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
                    <ArrayField source="diseases">
                        <SingleFieldList>
                            <ReferenceField source="id" reference="diseases">
                                <ChipField source="name" />
                            </ReferenceField>
                        </SingleFieldList>
                    </ArrayField>
                </Datagrid>
            )}
        </List>
    );
}


