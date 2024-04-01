import {Outlet, Link} from 'react-router-dom';
function Layout(){

    return (
        <div>
            <h1> Layout </h1>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;