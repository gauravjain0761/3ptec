import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { AppBar, Drawer, DrawerHeader } from "../styledLayout";
// import faceImg from "../../Assets/images/faces/face28.jpg";
import { BiSolidBriefcase, BiSolidContact, BiSupport } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaUserCog,
  FaBuilding,
  FaIdCard,
  FaFileInvoice,
  FaRegQuestionCircle,
  FaUserCheck,
  FaThList,
  FaStar,
  FaEnvelopeOpenText,
  FaBell,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { Avatar, Collapse, Menu, MenuItem, Stack } from "@mui/material";
import { BsDot } from "react-icons/bs";
// import Logo from "../../Assets/images/admin/CS-LOGO-HORIZONTAL.png";
import { PowerSettingsNew } from "@mui/icons-material";
// import { useAuthContext } from "../../auth/useAuthContext";
import { includes } from "lodash";

const MuiDrawer = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [hover, setHover] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeParent, setActiveParent] = React.useState(false);
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const { logout } = useAuthContext();
  const handleLogOut = () => {
    // logout();
    setAnchorEl(null);
    navigate("/");
  };

  const handleHover = (hoverId, key = "parent") => {
    sideNavData.map((elem, index) => {
      if (key === "parent") {
        if (elem.id == hoverId) {
          setHover(elem.id);
        }
      } else {
        elem?.children &&
          elem?.children.length > 0 &&
          elem?.children.map((childElem) => {
            if (childElem.id == hoverId) {
              setHover(childElem.id);
            }
          });
      }
    });
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let sideNavData = [
    {
      id: "1",
      title: "Dashboard",
      icon: <MdDashboard size={16} />,
      link: "/",
      type: "dashboard",
      faIcon: "fas fa-th-large",
    },
    {
      id: "2",
      title: "Reports",
      icon: <FaIdCard size={16} />,
      type: "driver",
      faIcon: "fas fa-user-cog",
      link: "/ytd-sales",
      children: [
        {
          id: 17,
          title: "YTD sales",
          icon: <BsDot size={16} />,
          link: "/ytd-sales",
        },
      ],
    },

    // {
    //   id: "12",
    //   title: "Blogs",
    //   icon: <FaThList size={16} />,
    //   link: "/master/blog",
    //   type: "blog",
    //   faIcon: "fas fa-th-list",
    // },
  ];
  const navRoute = useLocation();
  const [accordianOpen, setAcordianOpen] = React.useState(false);

  const handleCollapse = (panel) => (event, isExpanded) => {
    if (accordianOpen !== panel) {
      setAcordianOpen(panel);
    } else {
      setAcordianOpen(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="inherit"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e3e6f0",
        }}
      >
        <Toolbar sx={{
          justifyContent: "space-between",
          height: "60px",
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",

        }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box component="div">
              {/* <img src={Logo} width="110" height="36" alt="Logistic" />/ */}
              <h3
                style={{
                  color: "#607d8b",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >3PTEC</h3>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                // ...(open && { display: "none" }),
                flexGrow: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {/* <div className="navar-bell-section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="bell-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>

              <span className="bell-count">2</span>
            </div> */}

            <IconButton
              size="small"
              sx={{ ml: 2 }}
              onClick={handleClick}
              aria-controls={openDropDown ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openDropDown ? "true" : undefined}
            >
              {/* <Avatar alt="profile" src={faceImg} /> */}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openDropDown}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <PowerSettingsNew
                    fontSize="small"
                    sx={{ color: "#607d8b" }}
                  />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ padding: "0.5em 0.5em !important" }}>
          {sideNavData.map((text, index) => {
            let activeRoute = false;
            if (text?.children && text?.children?.length > 0) {
              if (includes(text?.children, navRoute?.pathname)) {
                activeRoute = true;
              }

              return (
                <React.Fragment key={`parent-${index}`}>
                  <ListItemButton
                    onMouseOver={() => handleHover(text.id)}
                    onMouseLeave={() => setHover(false)}
                    onClick={handleCollapse(index + 1)}
                    sx={{
                      "&.MuiListItemText-root .MuiTypography-root ": {
                        color:
                          hover == text.id ||
                            navRoute.pathname == text.link ||
                            activeRoute === text.link
                            ? "#fff!important"
                            : '#000',
                        fontSize: "14px",
                      },
                      backgroundColor:
                        navRoute.pathname == text.link ||
                          activeRoute === text.link
                          ? "#607d8b"
                          : null,
                      "&:hover": {
                        backgroundColor: "#607d8b",
                      },
                      color:
                        hover == text.id ||
                          navRoute.pathname == text.link ||
                          activeRoute === text.link
                          ? "#fff!important"
                          : null,
                      "&.MuiListItemButton-root": {
                        padding: open ? "8px 20px" : "8px 5px",
                        paddingLeft: !open ? "14px !important" : "20px",
                      },
                      borderRadius:
                        navRoute.pathname == text.link ||
                          activeRoute === text.link
                          ? "0.5em 0.5em 0 0"
                          : "0.5em",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        "&.MuiListItemIcon-root": {
                          marginRight: open ? "20px" : "30px",
                          minWidth: "auto",
                        },
                        color:
                          hover == text.id ||
                            navRoute.pathname == text.link ||
                            activeRoute === text.link
                            ? "#fff"
                            : null,
                      }}
                    >
                      {text?.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        "&.MuiListItemText-root .MuiTypography-root": {
                          color:
                            hover == text.id ||
                              navRoute.pathname == text.link ||
                              activeRoute === text.link
                              ? "#fff"
                              : null,
                          fontSize: "14px",
                        },
                      }}
                      primary={text?.title}
                    />
                    {accordianOpen === index + 1 ? (
                      <ExpandMore
                        sx={{
                          color:
                            hover == text.id || navRoute.pathname == text.link
                              ? "#fff"
                              : null,
                          fontSize: "14px",
                        }}
                      />
                    ) : (
                      <NavigateNextIcon sx={{ fontSize: "14px" }} />
                    )}
                  </ListItemButton>

                  <Collapse
                    in={accordianOpen === index + 1}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {text?.children &&
                        text?.children.map((child, childIndex) => {
                          return (
                            <ListItemButton
                              onMouseOver={() => handleHover(child.id, "child")}
                              onMouseLeave={() => setHover(false)}
                              LinkComponent={Link}
                              to={child?.link}
                              sx={{
                                justifyContent: open ? "initial" : "center",
                                backgroundColor:
                                  navRoute.pathname == child.link
                                    ? "#607d8b"
                                    : null,
                                "&:hover": {
                                  backgroundColor: "#607d8b",
                                  color: "#fff",
                                },

                                pl: open ? 4 : 2,
                              }}
                              key={`subChild-${childIndex}`}
                            >
                              <ListItemIcon
                                sx={{
                                  "&.MuiListItemIcon-root": {
                                    marginRight: open ? "20px" : "50px",
                                    minWidth: "auto",
                                  },
                                  color:
                                    hover == child.id ||
                                      navRoute.pathname == child.link
                                      ? "#fff"
                                      : null,
                                }}
                              >
                                {child?.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={child?.title}
                                sx={{
                                  "&.MuiListItemText-root .MuiTypography-root":
                                  {
                                    color:
                                      hover == child.id ||
                                        navRoute.pathname == child.link
                                        ? "#fff"
                                        : null,
                                    fontSize: "14px",
                                  },
                                }}
                              />
                            </ListItemButton>
                          );
                        })}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            } else {
              return (
                <ListItem
                  key={`parent-${index}`}
                  disablePadding
                  sx={{
                    display: "block",
                    // color: "#fff",
                    borderRadius: "0.5em",
                    marginBottom: "0.2em",

                    backgroundColor:
                      navRoute.pathname == text.link ? "#607d8b" : null,
                  }}
                >
                  <ListItemButton
                    onMouseOver={() => handleHover(text.id)}
                    onMouseOut={() => setHover(false)}
                    sx={{
                      minHeight: 48,
                      borderRadius: "0.5em",
                      justifyContent: open ? "initial" : "center",
                      "&.MuiListItemButton-root": {
                        paddingRight: !open && "0px !important",
                      },
                      px: 2.5,
                      "&:hover": {
                        backgroundColor: "#607d8b",
                        color: "#fff !important",
                      },
                    }}
                    LinkComponent={Link}
                    to={text?.link}
                  >
                    <ListItemIcon
                      sx={{
                        "&.MuiListItemIcon-root": {
                          marginRight: "20px",
                        },
                        minWidth: 0,
                        color:
                          hover == text.id || navRoute.pathname == text.link
                            ? "#fff"
                            : null,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text?.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text?.title}
                      sx={{
                        "&.MuiListItemText-root .MuiTypography-root": {
                          color:
                            hover == text.id || navRoute.pathname == text.link
                              ? "#fff"
                              : null,
                        },

                        opacity: open ? 1 : 0,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#e3e6f0" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "#e3e6f0",
            zIndex: -1,
          }}
        />
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default MuiDrawer;
