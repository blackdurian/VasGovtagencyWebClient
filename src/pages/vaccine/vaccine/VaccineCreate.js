import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    NumberInput
} from 'react-admin';
export const styles = {
    storageTemp: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};
// todo: useStyle
//TODO: soft-delete
export const VaccineCreate = (props) => {
    return(
        <Create {...props}>
            <SimpleForm redirect="list">
                <TextInput source="name" validate={required()} />
                <NumberInput  source="doseRequire" label="Dose Require" validate={required()}/>
                <NumberInput  source="dosesPerVial" label="Doses Per Vial" validate={required()}/>
                <NumberInput  source="storageTempUpperBound" label="StorageTempUpperBound Celsius" validate={required()}/>
                <NumberInput  source="storageTempLowerBound" label="storageTempLowerBound Celsius" validate={required()}/>
                <NumberInput  source="maxStorageDays" label="Max Storage Days" validate={required()}/>
                <TextInput source="mfgCompany" label="Manufacturer company" validate={required()} />
                <NumberInput  source="gapDays" label="Gap of days between vaccines" validate={required()}/>
            </SimpleForm>
        </Create>
    )};



