import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    NumberInput,
    AutocompleteArrayInput,
    ReferenceArrayInput, useCreateSuggestionContext, useCreate
} from 'react-admin';
import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@material-ui/core';


export const styles = {
    storageTemp: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const CreateDisease = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate('diseases');

    const handleSubmit = (event) => {
        event.preventDefault();
        create(
            {
                payload: {
                    data: {
                        name: value,
                    },
                },
            },
            {
                onSuccess: ({ data }) => {
                    setValue('');
                    onCreate(data);
                },
            }
        );
    };

    return (
        <Dialog open onClose={onCancel}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        label="New disease"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

// TODO: useStyle
//TODO: soft-delete
// TODO: vaccine name auto-Complete

export const VaccineCreate = (props) => {
    return(
        <Create {...props}>
            <SimpleForm redirect="list">
                <TextInput source="name" validate={required()} />
                <ReferenceArrayInput source="diseases" reference="diseases">
                    <AutocompleteArrayInput create={<CreateDisease />} />
                </ReferenceArrayInput>
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

