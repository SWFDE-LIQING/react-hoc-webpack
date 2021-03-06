import * as React from 'react';
import {Route,Switch } from 'react-router-dom';
import { HomeComponentHoc as HomeComponent } from './components/home';
import {RouterComponent as  HttpDemoRouter } from '../http';
import { RouterComponent as HeaderDemoRouter } from '../header';
import { RouterComponent as ImgZoomInDemoRouter } from '../imgzoomin';
import { RouterComponent as AccordionDemoRouter } from '../accordion';
import { RouterComponent as IconDemoRouter } from '../icon';



export class RouterComponent extends React.Component<any, any>{

    render() {
        return (
            <Switch>
                <Route path="/components/http" component={HttpDemoRouter} />
                <Route path="/components/header" component={HeaderDemoRouter} />
                <Route path="/components/imgzoomin" component={ImgZoomInDemoRouter} />
                <Route path="/components/icon" component={IconDemoRouter} />
                <Route path="/components/accordion" component={AccordionDemoRouter} />
                <Route path="/components" component={HomeComponent} />
            </Switch>
        );
    }
}