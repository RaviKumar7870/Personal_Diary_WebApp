import React from 'react';

const Emoji = props => (
    <span
        className={props.className}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        onClick={props.onClick ? props.onClick : function(){}}
    >
        {props.symbol}
    </span>
);
export default Emoji;