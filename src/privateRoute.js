import React,{Component} from 'react';
import { Route, Redirect} from 'react-router-dom';
class Privateroute extends Component {
    render() {
        const {component : RouteComponent, ...rest} = this.props;
        const isAuthenticated = localStorage.id;
        return (
            <Route
                {...rest}
                render={(props) => (
                    isAuthenticated ? (
                        <RouteComponent {...props} />
                    ) : (
                        <Redirect to="/" />
                    )
                )
                }
            />
        )
    }
}
export default Privateroute;