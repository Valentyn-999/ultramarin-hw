import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        setValue('');
        saveState<string>("editable-span-value", value);

    };

    return (
        <div className={s.superEditableSpan}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}

                />
            </div>
            <div className={s.savaAndStore}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>

                {/*<hr/>*/}
                {/*/!*для личного творчества, могу проверить*!/*/}
                {/*/!*<AlternativeSuperEditableSpan/>*!/*/}
                {/*<hr/>*/}
            </div>
        </div>
    );
}

export default HW6;
