import { Outlet } from "react-router-dom";

function movies() {
    return (
        <>
            <div>MOVIES</div>
            <Outlet />
        </>
    )
}

export default movies;