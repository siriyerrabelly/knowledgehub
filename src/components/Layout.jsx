import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout(){

return(

<div>

<Header/>

<div className="layout">

<Sidebar/>

<main className="content">
<Outlet/>
</main>

</div>

</div>

)

}

export default Layout;