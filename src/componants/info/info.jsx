import { Outlet } from "react-router-dom";

function info() {
    return (
        <>
            <div>INFO</div>
            <Outlet />
        </>
    )
}

export default info;