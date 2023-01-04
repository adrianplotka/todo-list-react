import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author";
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import Navigation from "./Navigation";


export default () => (
    <HashRouter>
        <Navigation/>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autorPage">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>

    </HashRouter>
);