import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import s from "./HW3.module.css";
import {v1} from "uuid";


// types
export type UserType = {
    _id: string // need to fix any
    user: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any
    const addUserCallback = (user: string) => { // need to fix any
        const newName = [ ...users, { user, _id: v1() } ]
        setUsers(newName); // need to fix
    }

    return (
        <div className={s.hw3}>
            <div className={s.title}>Homework 3</div>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
        </div>
    );
}

export default HW3;
