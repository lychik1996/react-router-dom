import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    return(
        <>
            <p className="body">{error.status}</p>
            <p className="body">{error.statusText || "Something goes wrong!!!"}</p>
        </>
    )
}