import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from './../common/assets/ssp.gif'
import s from './HW10.module.css'

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()
    // const loading = false;

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(function () {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div className={s.loading}>
            {/*<hr/>*/}
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img className={s.preloader} src={preloader} alt=""/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<Alternative/>*!/*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW10;
