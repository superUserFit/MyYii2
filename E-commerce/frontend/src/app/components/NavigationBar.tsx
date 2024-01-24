"use client";

import React, { useEffect, useState } from "react";
import {
  Flex,
  Link,
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { CustomPopover } from "../hooks/CustomPopover";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";
import { backend } from "../api/APIRoute";
import useShowToast from "../hooks/useShowToast";
import { useRecoilState } from "recoil";
import userAtom from "../atom/userAtom";
import Cookies from "js-cookies";


export const NavigationBar = () => {
  const [popoverService, setPopoverService] = useState(false);
  const [popoverAuth, setPopoverAuth] = useState(false);
  const [authState, setAuthState] = useState(false);
  const [services, setServices] = useState([]);
  const showToast = useShowToast();
  const [user] = useRecoilState(userAtom);


  const popoverServiceEnter = () => {
    setPopoverService(true);
  };

  const popoverServiceLeave = () => {
    setPopoverService(false);
  };

  const popoverAuthEnter = () => {
    setPopoverAuth(true);
  }

  const popoverAuthLeave = () => {
    setPopoverAuth(false);
  }

  const handleLogout = () => {
    Cookies.removeItem("Yii2")
  }

  useEffect(() => {
    if(user) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, [user]);


  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${backend}/api/services/getservices`);

      if(response.status === 200) {
        setServices(response.data);
      } else {
        showToast("Error", "Failed to get services", "error");
      }
    }

    getServices();
  }, []);


  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      justify="space-between"
      align="center"
      bg="red.500"
      paddingX={6}
      zIndex={10}
    >
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" width={72} />
      </Link>
      <Flex justifyContent={"center"} alignItems={"center"} gap={8}>
        <Link href={"/"} color={"white"} fontWeight={"medium"}>Home</Link>
        {CustomPopover("Services", services, popoverService, popoverServiceEnter, popoverServiceLeave)}
        <Link href={"/products"} color={"white"} fontWeight={"medium"}>Products</Link>
        <Link href={"/contacts"} padding={2} fontWeight={"medium"} color={"white"}>Contacts</Link>
        <Link href={"/policy"} padding={2} fontWeight={"medium"} color={"white"}>iTrack Policy</Link>

        <Popover isOpen={popoverAuth} onOpen={popoverAuthEnter} onClose={popoverAuthLeave}>
          <PopoverArrow/>
          <PopoverTrigger>
            <Button onMouseEnter={popoverAuthEnter}>
              <BsPersonCircle size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent onMouseEnter={popoverAuthEnter} onMouseLeave={popoverAuthLeave} width={"fit-content"} marginRight={4}>
            <PopoverBody display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              {authState ? (
                <>
                  <Link href={"/account-information"} padding={2} fontWeight={"medium"}>Account Information</Link>
                  <Divider/>
                  <Link onClick={handleLogout} padding={2} fontWeight={"medium"}>Logout</Link>
                </>
              ):(
                <Link href={"/auth/login"} padding={2} fontWeight={"medium"}>Login</Link>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
};
