"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  Link
} from "@chakra-ui/react";
import useShowToast from "@/app/hooks/useShowToast";
import axios from "axios";
import { frontend } from "@/app/api/APIRoute";
import { useRouter } from "next/navigation";
import Cookie from "js-cookies";


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const showToast = useShowToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const actionLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!formData.username || !formData.password) {
      showToast("Error", "Complete the form.", "error");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${frontend}/api/user/login`, formData, {
        headers: { "Content-Type" : "application/json" }
      });

      if(response.status === 200) {
        showToast("Success", "User successfully login", "success");
        Cookie.setItem("Yii2", JSON.stringify(response.data));
        router.push('/');
      } else {
        showToast("Error", "Failed to login", "error");
      }
    } catch(error) {
      showToast("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };


  return (
      <VStack spacing={8} justify="center" align="center" height="100vh">
      <Box
        padding={8}
        maxW="md"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        width="100%"
      >
        <Heading mb={4}>Login</Heading>
        <form onSubmit={actionLogin} autoComplete="off">
          <VStack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Enter your username" value={formData.username} onChange={(e) => setFormData((formData) => ({...formData, username: e.target.value}))} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" value={formData.password} onChange={(e) => setFormData((formData) => ({...formData, password: e.target.value}))} />
            </FormControl>

            <Button type="submit" bg={"red.500"} color={"white"} width="100%" isLoading={loading}>
              Login
            </Button>
          </VStack>

          <Box mt={4}>
            <Text textAlign={"center"}>Don't have an account with us? <Link href="/auth/signup" textDecoration={"underline"} fontWeight={"medium"} color={"blue.700"}>Sign up now!</Link></Text>
          </Box>
        </form>
      </Box>
    </VStack>
  );
};

export default Login;