import { Outlet } from "react-router-dom";

function homepage() {
    return (
        <>
        <div>HOMEPAGE</div>
        <Outlet />
        </>
    )
}

export default homepage;