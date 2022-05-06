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

const MainHeader = (props) => {
  const [navBg, setNavBg] = useState(props.navbarBg);

  const [activeMenu, setActiveMenu] = useState("");

  const navigate = useNavigate();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
      link: "/",
      label: "Dashboard",
      shouldLogin: true,
      activeTo: "",
      allowAccess: "superuser,administrator",
    },
    {
      icon: <StorefrontIcon />,
      link: "/shop",
      label: "Shop",
      shouldLogin: true,
      activeTo: "shop",
    },
    {
      icon: <SchoolIcon />,
      link: "/classroom",
      label: "Classroom",
      shouldLogin: true,
      activeTo: "classroom",
    },
    {
      icon: <BookIcon />,
      link: "/mybooks",
      label: "My Books",
      shouldLogin: true,
      activeTo: "mybooks",
      childs: [
        {
          link: "/mybooks/1",
          label: "menu 1",
          shouldLogin: true,
          activeTo: "mybooks",
        },
        {
          link: "/mybooks/2",
          label: "menu 2",
          shouldLogin: true,
          activeTo: "mybooks",
        },
      ],
    },
    {
      icon: <GroupsIcon />,
      link: "/master",
      label: "Master Menu",
      shouldLogin: true,
      activeTo: "master",
      childs: [
        {
          link: "/master/1",
          label: "menu 1",
          shouldLogin: true,
          activeTo: "mybooks",
        },
        {
          link: "/master/2",
          label: "menu 2",
          shouldLogin: true,
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
          menus={menus}
          settings={settings}
          activeMenu={activeMenu}
          onLogout={logout}
        />
        <Sidebar
          menus={menus}
          settings={settings}
          activeMenu={activeMenu}
          onLogout={logout}
        />
      </Navbar>
    </>
  );
};

export default connect()(MainHeader);
