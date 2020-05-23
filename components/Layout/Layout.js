import LayoutCss from  './Layout.module.css'
import { Container } from '@material-ui/core';

const Layout = ({ children }) => {
    return <Container className={LayoutCss.appContainer}>
    {children}
</Container>
}

export default Layout;