import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Flex,
    Box,
} from "@chakra-ui/react";
import { NavigationBar } from "../components/NavigationBar";
import softwareservice_1 from "../assets/softwareservice-1.png";
import softwareservice_2 from "../assets/softwareservice-2.png";
import softwareservice_3 from "../assets/softwareservice-3.png";
import softwareservice_4 from "../assets/softwareservice-4.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";


const ServicesPage = () => {
    return (
        <Flex direction="column" align="center">
            <NavigationBar />

            <Box mt={24} height={"100vh"} width={"100vw"}>
                <Flex gap={8}>
                <Card flex={1} boxShadow="2xl" borderRadius="md" p={4}>
                        <CardBody>
                            <Image src={softwareservice_1} height={160} width={160}  alt="Software Service 1"/>
                        </CardBody>
                        <CardFooter flexDirection={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                            1OFIS: ERP & CRM
                            <Link href={"/services/1"} style={{width: "100%"}}>
                            <Button
                                width={"100%"}
                                bg={"red.500"}
                                _hover={{color: "black", background: "blackAlpha.300"}}
                                color={"white"}
                                marginTop={4}
                            >
                                Contact Us
                            </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card flex={1} boxShadow="2xl" borderRadius="md" p={4}>
                        <CardBody>
                            <Image src={softwareservice_2} height={160} width={160}  alt="Software Service 2"/>
                        </CardBody>
                        <CardFooter flexDirection={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                            Advanced Fleet Management
                            <Link href={"/services/2"} style={{width: "100%"}}>
                            <Button
                                width={"100%"}
                                bg={"red.500"}
                                _hover={{color: "black", background: "blackAlpha.300"}}
                                color={"white"}
                                marginTop={4}
                            >
                                Contact Us
                            </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card flex={1} boxShadow="2xl" borderRadius="md" p={4}>
                        <CardBody>
                            <Image src={softwareservice_3} height={160} width={160}  alt="Software Service 2"/>
                        </CardBody>
                        <CardFooter flexDirection={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                            Accounting & Billing
                            <Link href={"/services/2"} style={{width: "100%"}}>
                            <Button
                                width={"100%"}
                                bg={"red.500"}
                                _hover={{color: "black", background: "blackAlpha.300"}}
                                color={"white"}
                                marginTop={4}
                            >
                                Contact Us
                            </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </Flex>
            </Box>
        </Flex>
    );
}

export default ServicesPage;
