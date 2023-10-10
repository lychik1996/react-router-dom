import { Outlet, NavLink } from "react-router-dom"
import { CustomLink } from "./CustomLink"
import { Suspense } from "react"//for lazy load
export default function HeadFoodPage(){
    return(
        <>
        <div className="header">
            <NavLink to="/" className={({isActive})=>isActive? 'active-link': ''}>HomePage</NavLink>
            <CustomLink to="/aboutpage">AboutPage</CustomLink>
            <NavLink to="/blogpage"className={({isActive})=>isActive? 'active-link': ''}>BlogPage</NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
        </Suspense>
        
        <div className="footer"><p>Its Footer</p></div>
        </>
    )
}