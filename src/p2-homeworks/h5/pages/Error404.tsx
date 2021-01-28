import React from "react";
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error404}>
            <div className={s.error404_text}>404
            Page not found!
            —ฅ/ᐠ.̫ .ᐟ\ฅ—</div><br/>
            <div className={s.girl}><img src="https://i.pinimg.com/originals/8b/94/2f/8b942fa691759d436ffd3fd5357c11c7.gif" alt=""/>
            </div>
        </div>
    )
}

export default Error404;
