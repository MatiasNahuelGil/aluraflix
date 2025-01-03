import { Link } from "react-router-dom";

export default function HeaderLink({url,children}){


    return(
        <>
            <Link to={url}>
                {children}
            </Link>
        </>
    )
}