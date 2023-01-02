import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/authorPage/AuthorPage";
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import { StyledLi, StyledNav, StyledNavLink, StyledUl } from "./styled";

export default () => (
    <HashRouter>
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/autorPage">O autorze</StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
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