/**
 * Created by merlin on 25/01/17.
 */
import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Search from '../Component/Search';
import Pokemon from '../Component/Pokemon';
import AppEntryPoint from '../EntryPoint/AppEntryPoint';

let routes = (
    <Route name="root" path="/" component={AppEntryPoint}>
      <IndexRedirect to="/search" />
      <Route name="search" path="/search" component={Search} />
      <Route name="pokemon" path="/pokemon/:name" component={Pokemon} />
    </Route>
);

export default routes;