import { Outlet, NavLink } from "react-router-dom"
import { CustomLink } from "./CustomLink"
export default function HeadFoodPage(){
    return(
        <>
        <div className="header">
            <NavLink to="/" className={({isActive})=>isActive? 'active-link': ''}>HomePage</NavLink>
            <CustomLink to="/aboutpage">AboutPage</CustomLink>
            <NavLink to="/blogpage"className={({isActive})=>isActive? 'active-link': ''}>BlogPage</NavLink>
        </div>
        <Outlet/>
        <div className="footer"><p>Its Footer</p></div>
        </>
    )
}