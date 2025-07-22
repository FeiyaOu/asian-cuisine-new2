import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <div>
            <header>Asian Cuisine</header>
            <main><Outlet/></main>
        </div>
    )
}

export default AppLayout
