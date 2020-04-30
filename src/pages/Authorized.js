import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';
import pathToRegexp from 'path-to-regexp';
import Authorized from '@/utils/Authorized';

// import { getAuthority } from '@/utils/authority';
import Exception403 from '@/pages/Exception/403';

const AuthComponent = ({
  children,
  location,
  route = {
    routes: [],
  },
  user
}) => {
  // const auth = getAuthority();

  const { currentUser } = user;
  const { routes = [] } = route;
  const isLogin = currentUser && currentUser.name;
  console.log(isLogin);
  const getRouteAuthority = (path, routeData) => {
    let authorities;
    routeData.forEach(route => {
      // match prefix
      if (pathToRegexp(`${route.path}(.*)`).test(path)) {
        authorities = route.authority || authorities;

        // get children authority recursively
        if (route.routes) {
          authorities = getRouteAuthority(path, route.routes) || authorities;
        }
      }
    });

    return authorities;
  };

  console.log(getRouteAuthority(location.pathname, routes))

  return (
    <Authorized
      authority={getRouteAuthority(location.pathname, routes) || ''}
      noMatch={isLogin ? <Exception403 /> : <Redirect to="/user/login" />}
    >
      {children}
    </Authorized>
  );
}

export default connect(({ user }) => ({
  user,
}))(AuthComponent);
