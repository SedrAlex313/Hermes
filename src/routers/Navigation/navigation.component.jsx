import { Outlet ,Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as SLR } from "../../assets/SLR.svg"  ;
import'./navigation.styles.scss'
const Navigation = () => {
    return(
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to = '/'>
             <SLR className="logo"/>
          </Link>
          <div className="nav-links-container">
             <Link className="nav-link" to = '/shop'>
                  Boutique
             </Link>
             <Link className="nav-link" to = '/sign-in'>
                  Signe
             </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
    
  }
  export default Navigation;