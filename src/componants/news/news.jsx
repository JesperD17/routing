import { Outlet } from "react-router-dom";

function news() {
    return (
        <>
            <div>NEWS</div>
            <Outlet />
        </>
    )
}

export default news;