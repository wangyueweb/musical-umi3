import { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useIntl } from 'umi';
import LoginItem from './LoginItem';
import LoginTab from './LoginTab';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const intl = useIntl();

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    Object.keys(LoginItem).forEach(item => {
      console.log(item);
    });
  });

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={intl.formatMessage({ id: 'Username' })}
        name="username"
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: 'Please input your username!' }),
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={intl.formatMessage({ id: 'Password' })}
        name="password"
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: 'Please input your password!' }),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>{intl.formatMessage({ id: 'Remember me' })}</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {intl.formatMessage({ id: 'submit' })}
        </Button>
      </Form.Item>
    </Form>
  );
};

Object.keys(LoginItem).forEach(item => {
  Login[item] = LoginItem[item];
});

export default Login;
