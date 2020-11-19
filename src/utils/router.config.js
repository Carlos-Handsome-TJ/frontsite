import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const renderRouter = (routers, auth, authPath = '/login', extraProps = {}, switchProps = {}) => (
    routers ? (
        <Switch {...switchProps}>
            {routers.map((route, index) => (
                <Route
                    key={route.key || index}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={props => {
                        if (!route.requireAuth || auth || route.path === authPath) {
                            return <route.component {...props} {...extraProps} route={route} />
                        }
                        return <Redirect to={
                            {
                                pathname: authPath,
                                state: {
                                    from: props.location
                                }
                            }
                        }
                        />
                    }}
                >
                </Route>
            ))
            }
        </Switch >
    ) : null
)
