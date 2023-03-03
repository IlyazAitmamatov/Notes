import React from 'react';
import classes from './textArea.module.css'

const TextArea = ({children, ...props}) => {
    return (
        <textarea className={classes.textArea} {...props} name="comment" cols="50" rows="20">
            {children}
        </textarea>
    );
}

export default TextArea;
