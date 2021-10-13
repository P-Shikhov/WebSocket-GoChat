import React from "react";
import Message from "../Message/Message";
import "./HistoryPanel.scss";

const HistoryPanel = (props) => {
    const messages = props.chatHistory.map(msg => (
        <Message message={msg.data} />
    ));

    return (
        <div className="chatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>
    )
}

export default HistoryPanel;