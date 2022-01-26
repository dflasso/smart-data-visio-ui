// React
import * as React from 'react';
// Material ui
import { createFilterOptions } from '@mui/base';
import { Autocomplete, TextField } from '@mui/material';


const filter = createFilterOptions();

export default function AutocompleteOrCreate({ label = "", ltsOptions = [], onChange }) {
    const [value, setValue] = React.useState(null);

    const sendValueRootComponent = (value) => {
        if (typeof onChange === "function") {
            onChange(value)
        }
    }

    const handleOnChange = (event, newValue) => {
        if (typeof newValue === 'string') {
            setValue({
                title: newValue,
            });
            sendValueRootComponent(newValue)
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
                title: newValue.inputValue,
            });
            sendValueRootComponent(newValue.inputValue)
        } else {
            setValue(newValue);
            sendValueRootComponent(newValue)
        }
    }

    const handleFilterOptions = (options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
            filtered.push({
                inputValue: params.inputValue,
                title: `Agregar opción: "${params.inputValue}"`,
            });
        }

        return filtered;
    }

    const handleOptionLabel = (option) => {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') {
            return option;
        }
        if (option.inputValue) {
            return option.inputValue;
        }
        return option.title;
    }



    return (
        <>
            <Autocomplete
                value={value}
                onChange={handleOnChange}
                filterOptions={handleFilterOptions}
                id="free-solo-dialog-demo"
                options={ltsOptions}
                getOptionLabel={handleOptionLabel}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(props, option) => <li {...props}>{option.title}</li>}
                sx={{ width: '100%' }}
                freeSolo
                renderInput={(params) => <TextField {...params} label={label} size="small" />}
            />
        </>
    );
}