import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    hw1: "/home-work1",
    hw2: "/home-work2",
    hw3: "/home-work3",
    hw4: "/home-work4"

    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
            <Route path={`${PATH.PRE_JUNIOR}${PATH.hw1}`} render={() => <HW1/>}/>
            <Route path={`${PATH.PRE_JUNIOR}${PATH.hw2}`} render={() => <HW2/>}/>
            <Route path={`${PATH.PRE_JUNIOR}${PATH.hw3}`} render={() => <HW3/>}/>
            <Route path={`${PATH.PRE_JUNIOR}${PATH.hw4}`} render={() => <HW4/>}/>

                {/*// add routes*/}

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
