import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === 'You should fill in your Name' ? s.error : s.ok   // need to fix with (?:)

    return (
        <div className={s.bll}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorText}>{error} </span>
            <button onClick={addUser} className={s.buttonAdd}>Your name</button>
            <span className={s.countOfUsers}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
