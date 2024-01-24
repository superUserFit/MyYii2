"use client";

import { frontend } from "@/app/api/APIRoute";
import useShowToast from "@/app/hooks/useShowToast";
import {
    VStack,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Link,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const showToast = useShowToast();
    const router = useRouter();


    const actionSignup = async () => {
        if(!formData.username || !formData.email || !formData.password) {
            showToast("Error", "Complete the form first", "success");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(`${frontend}/api/user/signup`, formData, {
                headers: { "Content-Type" : "application/json" }
            });

            if(response.status === 200) {
                showToast("Success", "User signup successfully. Check your email for account activation", "success");
                router.push('/auth/login');
            } else {
                showToast("Error", "Failed to signup", "error");
            }
        }catch(error) {
            showToast("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    }
    return (
    <VStack spacing={8} justify="center" align="center" height="100vh">
        <Box
          padding={8}
          maxW="md"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="xl"
          width="100%"
        >
            <Heading mb={4}>Signup</Heading>
            <form onSubmit={actionSignup}>
            <VStack spacing={4}>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Enter your username" value={formData.username} onChange={(e) => setFormData((formData) => ({...formData, username: e.target.value}))} />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="text" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData((formData) => ({...formData, email: e.target.value}))} autoComplete="off" />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" value={formData.password} onChange={(e) => setFormData((formData) => ({...formData, password: e.target.value}))} autoComplete="new-password" />
                </FormControl>

                <Button type="submit" bg={"red.500"} color={"white"} width="100%" isLoading={loading}>
                  Sign up
                </Button>
            </VStack>

            <Box mt={4}>
                <Text textAlign={"center"}>Have an account with us? <Link href="/auth/login" textDecoration={"underline"} fontWeight={"medium"} color={"blue.700"}>Login now!</Link></Text>
            </Box>
            </form>
            </Box>
        </VStack>
    );
}

export default Signup;