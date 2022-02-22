import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EditButton,
} from 'react-admin';


//TODO: Add Quick Filters
//TODO: Edit
export const DiseaseList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} sort={{ field: 'id', order: 'ASC' }}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.doseRequire} Dose Require`}
                    tertiaryText={record => record.mfgCompany}
                />
            ) : (
                <Datagrid  >
                    <TextField source="id" />
                    <TextField source="name" />
                    {/*<EditButton />*/}
                </Datagrid>
            )}
        </List>
    );
}

