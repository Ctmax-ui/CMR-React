import Dashboard from "../dashboard/Dashboard"
import { Sidebar } from "../reuseable/sidebar/Sidebar"

const Main = () => {
  return (<>

  <div className="flex font-sans relative">
    <Sidebar />
    <Dashboard />
  </div>

    
  </>)
}

export default Main