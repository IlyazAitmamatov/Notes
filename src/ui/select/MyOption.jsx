import React from 'react';
import classes from './MyOption.module.css'

const MyOption = ({options, defaultOption, value, onChange}) => {
    return (
        <select 
            className={classes.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultOption}</option>
            {options.map((option) => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
}

export default MyOption;
