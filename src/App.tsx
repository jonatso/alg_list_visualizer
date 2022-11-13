import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import AlgCard from "./AlgCard";
import InputModal from "./InputModal";

export const App = () => {
    const [algLists, setAlgLists] = useState<
        { title: string; algs: string[] }[]
    >([]);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <VStack spacing={3}>
                        <Text fontWeight={"bold"} fontSize={30}>
                            Alg List Visualizer
                        </Text>
                        <InputModal setAlgLists={setAlgLists} />

                        {algLists.length > 0 ? (
                            algLists.map((algList) => (
                                <Box>
                                    <Text fontWeight={"semibold"}>
                                        {algList.title}
                                    </Text>
                                    <Grid templateColumns={"repeat(5, 1fr)"}>
                                        {algList.algs.map((alg) => (
                                            <AlgCard alg={alg} />
                                        ))}
                                    </Grid>
                                </Box>
                            ))
                        ) : (
                            <Text>
                                🤠 Seperate each alg list with a line starting
                                with //, and put one alg per line. 🤠
                            </Text>
                        )}
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
