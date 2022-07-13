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
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import LoginIcon from "@mui/icons-material/Login";
import { useGlobalFunction } from "../../../services";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
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
      icon: <BookIcon />,
      link: "/my-book-list",
      label: "My Books List",
      shouldLogin: 1,
      activeTo: "my-book-list",
      allowAccess: "public",
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
      allowAccess:
        "superuser,administrator,Headmaster,SCHOOLADMIN,TEACHER,STUDENT",
    },
    {
      icon: <BookIcon />,
      link: "/grade",
      label: "Grade",
      shouldLogin: 1,
      activeTo: "grade",
      allowAccess: "TEACHER",
      childs: [
        {
          link: "/grade/grade-overview",
          label: "Grade Overview",
          // shouldLogin: false,
          activeTo: "grade",
        },
        {
          link: "/grade/manage-grades",
          label: "Manage Grades",
          // shouldLogin: false,
          activeTo: "grade",
        },
      ],
    },
    {
      icon: <BookIcon />,
      link: "/grade/grade-overview",
      label: "Grade",
      shouldLogin: 1,
      activeTo: "grade",
      allowAccess: "SUPERUSER,ADMINISTRATOR,HEADMASTER,SCHOOLADMIN,STUDENT",
    },
    // {
    //   icon: <LockOutlinedIcon style={{ color: "#8E98EE" }} />,
    //   link: "/teacher-resources",
    //   label: "Teacher Resources",
    //   shouldLogin: true,
    //   activeTo: "teacher-resources",
    //   allowAccess: "teacher,public,SCHOOLADMIN",
    // },

    // {
    //   icon: <GroupsIcon />,
    //   link: "/master",
    //   label: "Master Menu",
    //   shouldLogin: 1,
    //   activeTo: "master",
    //   childs: [
    //     {
    //       link: "/master/1",
    //       label: "master 1",
    //       // shouldLogin: false,
    //       activeTo: "master",
    //     },
    //     {
    //       link: "/master/2",
    //       label: "master 2",
    //       // shouldLogin: false,
    //       activeTo: "master",
    //     },
    //   ],
    // },
  ];

  const settings = [
    {
      icon: <AccountCircleOutlinedIcon className="text-info-500" />,
      link: "/manage-account",
      label: "Manage Account",
      shouldLogin: true,
      activeTo: "manage-account",
      allowAccess: "student,teacher,public",
    },
    {
      icon: <LockOutlinedIcon style={{ color: "#8E98EE" }} />,
      link: "/security",
      label: "Security",
      shouldLogin: true,
      activeTo: "security",
      allowAccess: "student,teacher,public",
    },

    // dihilangkan sementara
    // {
    //   icon: <HistoryToggleOffOutlinedIcon style={{ color: "#C48EEE" }} />,
    //   link: "/purchased-history",
    //   label: "Purchased history",
    //   shouldLogin: true,
    //   activeTo: "purchased-history",
    //   allowAccess: "student,teacher,public",
    // },
    // {
    //   icon: <ExitToAppRoundedIcon />,
    //   link: "/logout",
    //   label: "Logout",
    //   shouldLogin: true,
    //   activeTo: "logout",
    // },
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
      shouldLogin: 1,
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
