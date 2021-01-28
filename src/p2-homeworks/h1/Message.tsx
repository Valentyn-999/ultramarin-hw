import React from "react";
import MessageStyle from './Message.module.css';


type messageDataType = {
    avatar: string
    name: string
    text: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={MessageStyle.message}>
            <div className={MessageStyle.avatar}>{props.avatar}<img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhNlHxZjB22bpAA04ElAPd4FzC_p6fy9gZnw&usqp=CAU"}/>
            </div>
            <div className={MessageStyle.name}>{props.name}</div>
            <div className={MessageStyle.text}>{props.text}</div>
            <div className={MessageStyle.time}>{props.time}</div>
        </div>
    );
}

export default Message;
