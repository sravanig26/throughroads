import React from 'react';

function ErrorNotice (props) {
    const mystyle = {
        color: "white",
        backgroundColor: "crimson",
        padding: "11px",
        fontSize: "17px",
        fontWeight: "600"
      };
    return (
        <div className="error-notice" style={mystyle}>
            <span>{props.message}</span>
            <button onClick={props.clearError}>X</button>
        </div>
    );
}

export default ErrorNotice;