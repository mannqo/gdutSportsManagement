import React, { memo } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { framework_gdut } from '../../../../../constant/system';

const { SubMenu } = Menu;

const Framework = memo(() => {
    const handleClick = (e: any) => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['a']}
            defaultOpenKeys={['sub1','g2']}
            mode="inline"
        >
            <SubMenu
                key="sub1"
                icon={<MailOutlined />}
                title="选择组织"
            >
                <SubMenu key="g1" title="协邦网路">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </SubMenu>
                <SubMenu key="g2" title="广工">
                    {
                        framework_gdut.map((item) => (
                            <Menu.Item key={item.name}>{item.label}</Menu.Item>
                        ))
                    }
                </SubMenu>
            </SubMenu>
        </Menu>
    )
})

export default Framework