import { Link } from 'umi';
import React from 'react';
import { connect } from 'dva';

// import logo from '@src/assets/logo.svg';
import styles from './UserLayout.less';

const UserLayout = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              {/* <img alt="logo" className={styles.logo} src={logo} /> */}
              <span className={styles.title}>望琴</span>
            </Link>
          </div>
          <div className={styles.desc}>xx望琴 版本号: xxx</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
