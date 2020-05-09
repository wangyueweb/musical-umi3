import React, {useState} from 'react';
import styles from './Login.less';
import Login from '@/components/Login';
import { useIntl } from 'umi';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default function LoginPage () {
  const { formatMessage } = useIntl();
  const [type, setType] = useState('account');
  const [autoLogin, setAutoLogin] = useState(true);

  // const onTabChange = type => {
  //   this.setState({ type });
  // }
  return(
    <div className={styles.main}>
      <Login
        defaultActivekey={type}
        // onTabChange={this.onTabChange}
        // onSubmit={this.handleSubmit}
        ref={form => {
          this.loginForm = form;
        }}
      >
        <Tab key="account" tab={formatMessage({ id: 'app.login.tab-login-credentials' })}>
          {/* {login.status === 'error' &&
            login.type === 'account' &&
            !submitting &&
            this.renderMessage(formatMessage({ id: 'app.login.message-invalid-credentials' }))} */}
          <UserName
            name="userName"
            placeholder={`${formatMessage({ id: 'app.login.userName' })}: admin or user`}
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'validation.userName.required' }),
              },
            ]}
          />
          <Password
            name="password"
            placeholder={`${formatMessage({ id: 'app.login.password' })}: ant.design`}
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'validation.password.required' }),
              },
            ]}
            onPressEnter={e => {
              e.preventDefault();
              this.loginForm.validateFields(this.handleSubmit);
            }}
          />
        </Tab>

        <Submit loading={false}>
          {formatMessage({ id: 'app.login.tab-login-credentials' })}
        </Submit>
      </Login>
    </div>
  )
}
