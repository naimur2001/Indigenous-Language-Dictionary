import { Outlet } from "react-router-dom"
import HomeFooter from "./HomeFooter"
import HomeNav from "./HomeNav"


const HomePage = () => {
  return (
    <div className="relative">
<HomeNav></HomeNav>
<Outlet></Outlet>
<div className="fixed bottom-0 w-full">
<HomeFooter ></HomeFooter>
</div>
    </div>
  )
}

export default HomePage