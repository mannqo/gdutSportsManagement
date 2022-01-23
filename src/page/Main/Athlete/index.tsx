import React, { memo } from 'react';
import { Menu } from 'antd'; 

export default memo(function index() {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1">运动员信息表</Menu.Item>
        </Menu>
    );
});
