import { Breadcrumb } from 'antd';
import { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { useSecLevel } from './useSecLevel';



const SecondLevel = memo((props: { children: { children: any }, location: { pathname: string } }) => {
    const { location: { pathname } } = props;
    const { children } = props;
    const {
        breadcrumbs
    } = useSecLevel(children.children, pathname);

    return (
        <>
            <Breadcrumb>
                {
                    breadcrumbs.map((item, index) => {
                        return (
                            <Breadcrumb.Item key={index}>
                                <Link to={item.path}>{item.breadcrumbName}</Link>
                            </Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb>
            {children && renderRoutes(children.children)}
        </>
    )
})

export default SecondLevel