const NavBar = ({ totalCounters }) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
                <a href="" className="navbar-brand">
                    NavBar
                    <span className="badge badge-dark m-2">{ totalCounters }</span>
                </a>
            </nav>
     );
}
 
export default NavBar;