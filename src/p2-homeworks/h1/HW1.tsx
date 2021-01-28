import React from "react";
import Message from "./Message";
import src from "*.gif";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={''}
                name={"Valentyn"}
                text={"Today I was a good day beacuse I woke up so happy, the whole day was really awsome!"}
                time={"22:00"}
            />
        </div>
    );
}

export default HW1;
