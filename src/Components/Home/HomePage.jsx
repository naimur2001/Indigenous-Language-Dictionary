import { Outlet } from "react-router-dom"
import HomeFooter from "./HomeFooter"
import HomeNav from "./HomeNav"
import HomeSideBar from "./HomeSideBar"
import DataDisplay from "./DataDisplay"


const HomePage = () => {
  return (
    <div className="">
<HomeNav></HomeNav>
<Outlet></Outlet>
<div className="flex ">
<HomeSideBar></HomeSideBar>
<span className="m-5"><DataDisplay></DataDisplay></span>
</div>
<HomeFooter ></HomeFooter>

    </div>
  )
}

export default HomePage