import "./navbar.css";
// import {BsSearch} from "react-icons/bs";
import Logo from '../../images/logof.png'
import Adminimg from '../../images/admin.png'

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="adlogo">
          <img src={Logo} alt="nav Logo" />
        </div>
        {/* <div className="searchh">
          <input type="text" placeholder="Search..." />
          <BsSearch />
        </div> */}
        
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> 
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>*/}
          <div className="item">
            <p>ADMIN</p>
            <img src={Adminimg} alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
