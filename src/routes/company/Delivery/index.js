import React from "react";
import asyncComponent from "util/asyncComponent";
import {Redirect, Route, Switch} from "react-router-dom";

const Delivery = ({match}) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list`}/>
        <Route path={`${match.url}/list`} component={asyncComponent(() => import('./List'))}/>
        <Route path={`${match.url}/delivery/:deliveryId`} component={asyncComponent(() => import('./DeliveryDetails'))} />
    </Switch>
);

export default Delivery;
