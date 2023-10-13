import React, { useState,useContext } from "react";

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
import SetTheme  from "../Context/Theme"
import  Contact  from "../../assets/letter.png";
import  ContactLight  from "../../assets/letterLight.png";


export default function renderHeader({ handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNight,setNight] = useState(false)

  const {dayNight, setDayNight} = useContext(SetTheme);

  const  nightModeHandler = () =>  { 
    setDayNight(!dayNight);
     setNight(true)
     if(dayNight){
      setNight(false)
     }
    };
    


  const menuItems = ["Home", "Projects", "About", "Contact"];
  return (
    <div style={{borderBottom:"inset", backgroundColor:"#e1dfdd"}}>
      <Navbar   isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle 
          
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="  hidden-on-desktop sm:flex"
          />
          <NavbarBrand>
            <p className="Header-Logo " onClick={() => handlePageChange("Home")} >Rohit</p>
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
              href="#Project"
     
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
          <NavbarItem  onClick={() => handlePageChange("Contact")} className=" aspect-square w-7 cursor-pointer">
            {isNight === true ?(<img src= {ContactLight} alt="" ></img> ):( <img src= {Contact} alt="" ></img>  )}
         </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                onClick={()=> {handlePageChange(item) ,setIsMenuOpen(false)}}
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

