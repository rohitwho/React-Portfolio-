import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Link,
  Switch,
} from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export default function renderHeader({ handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dayNight, setDayNight] = useState(false);

  function nightModeHandler() {
    setDayNight(true);
    console.log("hello");
  }

  const menuItems = ["Home", "Projects", "About", "Contact"];
  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="  hidden-on-desktop sm:flex"
          />
          <NavbarBrand>
            <p className="Header-Logo ">Rohit</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="   hidden-on-mobile  sm:flex gap-4"
          justify="center"
        >
          <NavbarItem isActive>
            <Link
              color="primary"
              href="#"
              onClick={() => handlePageChange("Home")}
            >
              <p className="Navbar-A">Home</p>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              color="foreground"
              href="#"
              onClick={() => handlePageChange("Projects")}
            >
              <p className="Navbar-A">Projects</p>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              color="foreground"
              href="#"
              aria-current="page"
              onClick={() => handlePageChange("About")}
            >
              <p className="Navbar-A">About</p>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              color="foreground"
              href="#"
              onClick={() => handlePageChange("Contact")}
            >
              <p className="Navbar-A">Contact</p>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Switch
              isSelected={dayNight}
              size="lg"
              color="success"
              startContent={<SunIcon />}
              endContent={<MoonIcon />}
              onClick={nightModeHandler}
            ></Switch>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onClick={() => handlePageChange(item)}
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "warning"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}

// <header className="Primary-Header ">
//         <h1 className="Header-Logo">Rohit</h1>
//         <nav className="Primary-Navbar">
//           <ul className="U-List">
//             <li className="Navbar-Links ">
//               <a
//                 href="#"
//                 className="Navbar-A"
//                 onClick={() => handlePageChange("Home")}
//               >
//                 Home
//               </a>
//             </li>
//             <li className="Navbar-Links">
//               <a
//                 href="#Projects"
//                 className="Navbar-A"
//                 onClick={() => handlePageChange("project")}
//               >
//                 Projects
//               </a>
//             </li>
//             <li className="Navbar-Links">
//               <a
//                 href="#About"
//                 className="Navbar-A"
//                 onClick={() => handlePageChange("about")}
//               >
//                 About
//               </a>
//             </li>
//             <li className="Navbar-Links">
//               <a
//                 href="#Contact"
//                 className="Navbar-A"
//                 onClick={() => handlePageChange("Contact")}
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="Navbar-Links">
//               {" "}
//               <Hire className="Navbar-A" onClick={handleOpen}>
//                 Hire Me
//               </Hire>
//             </li>
//           </ul>
//         </nav>
//       </header>

{
  /* <Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
  <FormInput
    inputLabel="Full Name:"
    labelFor="name"
    inputType="text"
    inputId="name"
    inputName="name"
    placeholdertext="Name"
    ariaLabelName="Name"
  />
  <FormInput
    inputLabel="Email :"
    labelFor="email"
    inputType="email"
    inputId="email"
    inputName="email"
    placeholdertext="email"
    ariaLabelName="Email"
  />

  <FormInput
    inputLabel="Project Description :"
    labelFor="Message"
    inputType="textarea"
    inputId="Message"
    inputName="Message"
    placeholdertext="Message"
    ariaLabelName="Message"
    cols="70"
    rows="8"
  />
  <Button
    variant="ghost"
    color="danger"
    className="  m-3 "
    onClick={handleClose}
  >
    Cancel
  </Button>

  <Button
    variant="ghost"
    color="primary"
    className="m-3 p-4 "
    onPress={handleClose}
  >
    Submit
  </Button>
</Box>
</Modal> */
}
