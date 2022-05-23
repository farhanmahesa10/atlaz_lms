import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import BookIcon from "@mui/icons-material/Book";
import Sidebar from "./Sidebar";
import NavbarContainer from "./NavbarContainer";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import LoginIcon from "@mui/icons-material/Login";
import { useGlobalFunction } from "../../../services";
const MainHeader = (props) => {
  const [navBg, setNavBg] = useState(props.navbarBg);
  const [showCanvas, setShowCanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const { getUserInfo } = useGlobalFunction();

  const navigate = useNavigate();
  const disPatch = useDispatch();
  const auth = getUserInfo();

  useEffect(() => {
    let isMounted = true;
    window.addEventListener(
      "scroll",
      () => {
        if (isMounted) {
          if (window.pageYOffset >= 50) {
            setNavBg("white");
          } else {
            setNavBg(props.navbarBg);
          }
        }
      },
      { passive: true }
    );

    let fullUrl = window.location.pathname;
    let activeUrlForMenu = fullUrl.split("/");
    setActiveMenu(activeUrlForMenu[1]);

    return () => {
      isMounted = false;
    };
  }, []);

  const menus = [
    {
      icon: <DashboardIcon />,
      link: "/dashboard",
      label: "Dashboard",
      shouldLogin: 1,
      activeTo: "dashboard",
      // allowAccess: "superuser,administrator",
    },
    {
      icon: <StorefrontIcon />,
      link: "/",
      label: "Shop",
      shouldLogin: 1,
      activeTo: "",
    },
    {
      icon: <SchoolIcon />,
      link: "/classroom",
      label: "Classroom",
      shouldLogin: 1,
      activeTo: "classroom",
    },
    {
      icon: <BookIcon />,
      link: "/report",
      label: "Report",
      shouldLogin: 1,
      activeTo: "report",
      allowAccess: "teacher",
      childs: [
        {
          link: "/report/type1",
          label: "type 1",
          // shouldLogin: false,
          activeTo: "report",
        },
        {
          link: "/report/type2",
          label: "tupe 2",
          // shouldLogin: false,
          activeTo: "report",
        },
      ],
    },
    {
      icon: <BookIcon />,
      link: "/report/type1",
      label: "Report",
      shouldLogin: 1,
      activeTo: "report",
      allowAccess: "SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,STUDENT,PUBLIC",
     
    },
    {
      icon: <BookIcon />,
      link: "/mybooks",
      label: "My Books",
      shouldLogin: 1,
      activeTo: "mybooks",
      // allowAccess: "superuser,administrator",
      childs: [
        {
          link: "/mybooks/1",
          label: "mybook 1",
          // shouldLogin: false,
          activeTo: "mybooks",
        },
        {
          link: "/mybooks/2",
          label: "mybook 2",
          // shouldLogin: false,
          activeTo: "mybooks",
        },
      ],
    },
    {
      icon: <GroupsIcon />,
      link: "/master",
      label: "Master Menu",
      shouldLogin: 1,
      activeTo: "master",
      childs: [
        {
          link: "/master/1",
          label: "master 1",
          // shouldLogin: false,
          activeTo: "master",
        },
        {
          link: "/master/2",
          label: "master 2",
          // shouldLogin: false,
          activeTo: "master",
        },
      ],
    },
  ];

  const settings = [
    {
      icon: <AccountCircleRoundedIcon />,
      link: "/account-settings",
      label: "Account Settings",
      shouldLogin: true,
      activeTo: "account-settings",
    },
    {
      icon: <ExitToAppRoundedIcon />,
      link: "/logout",
      label: "Logout",
      shouldLogin: true,
      activeTo: "logout",
    },
  ];

  const apps = [
    {
      icon: <LoginIcon />,
      link: "/login",
      label: "Login",
      shouldLogin: 0,
      activeTo: "login",
    },
    {
      icon: <AccountCircleRoundedIcon />,
      link: "/register",
      label: "Register",
      shouldLogin: 0,
      activeTo: "register",
    },
  ];

  const sideBarControl = [
    //shouldLogin :  0 = false, 1 = true , 2 = true false
    {
      label: "Menu",
      shouldLogin: 2,
      menus: menus,
    },
    {
      label: "Settings",
      shouldLogin: 1,
      menus: settings,
    },
    {
      label: "App",
      shouldLogin: 0,
      menus: apps,
    },
  ];

  const logout = () => {
    localStorage.removeItem(process.env.REACT_APP_BASE_URL + "/accessToken");
    disPatch({ type: "SET_AUTH", value: { ...auth, isLogin: false } });
    navigate("/");
  };

  return (
    <>
      <Navbar
        bg={`${props.navbarBg ? navBg : "bg-white "}`}
        className={`border-bottom m-0 p-0 border-secondary-300 position-fixed h-82  w-full ${props.navbarBg}`}
        expand="lg"
        style={{ zIndex: 9 }}
      >
        <NavbarContainer
          auth={auth}
          menus={menus}
          apps={apps}
          setShowCanvas={setShowCanvas}
          settings={settings}
          activeMenu={activeMenu}
          onLogout={logout}
        />
        <Sidebar
          pages={sideBarControl}
          auth={auth}
          menus={menus}
          activeMenu={activeMenu}
          setShowCanvas={setShowCanvas}
          showCanvas={showCanvas}
          onLogout={logout}
        />
      </Navbar>
    </>
  );
};

export default connect()(MainHeader);
