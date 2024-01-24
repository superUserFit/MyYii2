import { NavigationBar } from "./components/NavigationBar";
import {
    Text,
    Heading,
    Flex,
    Container,
    Box,
    Card,
    CardBody
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import userAtom from "./atom/userAtom";


export const App = () => {
    return (
        <Box>
            <header>
                <NavigationBar />
            </header>
            <Flex justifyContent="center" alignItems="start" flexDirection="column" h="100vh" color={"black"}>
                <Box marginLeft={8}>
                    <Heading fontSize="xl" fontWeight="bold" textAlign="start" textDecoration={"underline"}>
                        CLOUD SOLUTION & AIOT SYSTEM SPECIALIST
                    </Heading>
                    <Text textAlign="start" fontWeight={"medium"} marginTop={4} width={"60vw"}>
                        We develop cloud solutions which help cooperates to improve efficiency in their operation and management use case scenarios upon Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Asset Management.
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Card>
                    <CardBody></CardBody>
                </Card>
            </Box>
        </Box>
    );
};
