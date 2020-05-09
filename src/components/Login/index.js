import React, { useState, useEffect } from "react";
import { Form, Tabs } from 'antd';
import LoginItem from './LoginItem';
import LoginTab from './LoginTab';
import LoginContext from './loginContext';
import LoginSubmit from './LoginSubmit';
import styles from './index.less';

// Object.keys(LoginItem).forEach(item => {
//   console.log(LoginItem[item]);
//   Login[item] = LoginItem[item];
//   console.log(Login[item])
// });
const Login = (props) => {
  const [form] = Form.useForm();
  const [type, setType] = useState(props.defaultActivekey);
  const [tabs, setTabs] = useState(0);
  const [active, setActive] = useState(0);
  // const [className, setClassName] = useState(0);
  // const [children, setChildren] = useState(0);
  const [onTabChange, setOnTabChange] = useState(0);

  const TabChildren = [];
  const otherChildren = [];

  const { children } = props;


  const onSwitch = type => {
    setType({type})
    onTabChange(type);
  };

  const getContext = () => {
    return {
      tabUtil: {
        addTab: id => {
          setTabs({...tabs, id});
        },
        removeTab: id => {
          setTabs({
            tabs: tabs.filter(currentId => currentId !== id),
          });
        },
      },
      form,
      updateActive: activeItem => {
        if (active[type]) {
          active[type].push(activeItem);
        } else {
          active[type] = [activeItem];
        }
        setActive(active);
      },
    };
  };

  console.log('getContext', getContext())

  const handleOnClick = index => {
    setActiveIndex({ index });
  };

  // useEffect(() => {
  //   console.log(props.defaultActivekey);
  //   setType(props.defaultActivekey)
  //   console.log(type);
  // })


  // React.Children.forEach(children, item => {
  //   console.log(type, item);
  //   if (!item) {
  //     return;
  //   }
  //   // eslint-disable-next-line
  //   if (item.type.typeName === 'LoginTab') {
  //     TabChildren.push(item);
  //   } else {
  //     otherChildren.push(item);
  //   }
  // });

  children.forEach(item => {
    console.log(type, item);

    if (!item) {
      return;
    }
    // eslint-disable-next-line
    if (item.type.typeName === 'LoginTab') {
      TabChildren.push(item);
    } else {
      otherChildren.push(item);
    }


    console.log(1, TabChildren)
    console.log(2, otherChildren)
  });

  console.log(312321321,tabs);

  return (
    <LoginContext.Provider value={getContext()}>
      <div className={styles.login}>
        {tabs.length}
        <Form>
          {tabs.length ? (
            <React.Fragment>
              <Tabs
                animated={false}
                className={styles.tabs}
                activeKey={type}
                onChange={this.onSwitch}
              >
                {TabChildren}
              </Tabs>
              {otherChildren}
            </React.Fragment>
          ) : (
            children
          )}
        </Form>
      </div>
    </LoginContext.Provider>
  )

}

Login.Tab = LoginTab;
Login.Submit = LoginSubmit;

export default Login;