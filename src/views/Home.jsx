// This is you home view, which is being render on main.jsx
import reactLogo from "../assets/reactLogo.png"
import { Navbar } from "../components/Navbar";

const Home = () => {

  return (
    <>
    <Navbar/>
     <div className="container-fluid text-center vh-100 d-flex align-items-center">
      <div className="row">
        <div className="col">
          <h1>React Template without layout!</h1>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <h2>Start creating a small React app using this boilerplate. <a><img height="50px" width="50px" src={reactLogo}/></a></h2>
        </div>
      </div>
     </div>
    </>
  )
}

export default Home;
