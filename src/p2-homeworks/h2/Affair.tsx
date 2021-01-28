import React from "react";
import { AffairType } from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any // string?
    deleteAffairCallback: (id: number) => void// need to fix any // (param-s) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair.id)};// need to fix

    return (
        <div>
            {
                ` ${ props.affair.name }  ${ props.affair.priority } `
            }

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
