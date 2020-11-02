import React from 'react';
const Message = ({ message, messageType = "info" }) => {
    const className = messageType === "info" ? "message infoMessage" : "message";

    return (<div className={className}>{message}</div>);
};

export default Message;