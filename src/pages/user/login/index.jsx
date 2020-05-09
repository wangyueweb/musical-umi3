import React, { useEffect } from 'react';
import { Form, Button, Input, Checkbox, Tooltip, Tabs } from 'antd'
import { useModel, Redirect, useIntl, useLocation } from 'umi';
import { isInvalidInitState, isNotEmpty, pick } from '@/helpers';

import Login from './components/login';
import styles from './Login.less';

function LoginPage() {
  const { initialState } = useModel('@@initialState');
  const { initBackground } = useModel('useLoginModel', m =>
    pick(m, 'initBackground'),
  );
  const { formatMessage } = useIntl();
  // @ts-ignore
  const { query } = useLocation();

  console.log(initialState);

  // useEffect(() => {
  //   initBackground();
  // }, [initBackground]);

  // if (isNotEmpty < string > initialState && !isInvalidInitState(initialState)) {
  //   // @ts-ignore
  //   if (query.redirectTo) {
  //     return <Redirect to={{ pathname: query.redirectTo }} />;
  //   }
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <div id="bg-animate" className={styles.bgContainer}></div>
      <div className={styles.main}>
        <Tabs defaultActiveKey="accountway" className={styles.signinContainer}>
          <Tabs.TabPane
            tab={formatMessage({ id: 'LOGIN_TAB_ACCOUNT' })}
            className={styles.signinInnerContainer}
            key="account"
          >
            <Login/>
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={formatMessage({ id: 'LOGIN_TAB_MOBILE' })}
            className={styles.signinInnerContainer}
            key="mobile"
          >
            2
          </Tabs.TabPane>
        </Tabs>
      </div>
      {/* <LangSwitch className={styles.lang} /> */}
    </>
  );
}

Login.title = 'LOGIN_TITLE';
Login.layout = 'BLANK';
Login.requireSignin = false;

export default LoginPage;
