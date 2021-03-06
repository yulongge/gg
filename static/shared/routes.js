/**
 * Created by 52913 on 2016/4/9.
 */

import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Login from './containers/Login/'
import User from './containers/user/User'
import UserEdit from './containers/user/UserEdit'
import UserGroup from './containers/user/UserGroup'
import UserGroupEdit from './containers/user/UserGroupEdit'
import ArticleEdit from './containers/Article/edit'

export default (
    <Route path="/" component={App}>
        <Route path="user" >
        	<Route path="group" component={UserGroup} />
        	<Route path="group/create" component={UserGroupEdit} />
        	<Route path="group/edit/:id" name="UserGroupEdit" component={UserGroupEdit} />
        	<Route path="admin" component={User} />
        	<Route path="admin/create" name="UserCreate" component={UserEdit} />
        	<Route path="admin/edit/:id" name="UserEdit" component={UserEdit} />
        </Route>
        <Route path="article">
        	<Route path="create" name="ArticleCreate" component={ArticleEdit}/>
        </Route>
        <Route path="login" name="login" component={Login}/>
    </Route>
)

