import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    Grid,
    theme,
    Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AlgCard from "./AlgCard";
import parseInput from "./parseInput";

export const App = () => {
    // const [algLists, setAlgLists] = useState<
    //     { title: string; algs: string[]; isZBLS: boolean }[]
    // >([]);

    let [inputValue, setInputValue] = useState(
        () => localStorage.getItem("algListInput") || ""
    );

    let algLists = parseInput(inputValue);

    useEffect(() => {
        localStorage.setItem("algListInput", inputValue);
    }, [inputValue]);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl" height={"100vh"}>
                <Grid p={0} templateColumns="70% 30%" height={"100vh"}>
                    <VStack spacing={3} height={"100vh"} overflow={"scroll"}>
                        <Text fontWeight={"bold"} fontSize={30}>
                            Alg List Visualizer
                        </Text>
                        {algLists.length > 0 ? (
                            algLists.map((algList) => (
                                <Box>
                                    <Text fontWeight={"semibold"}>
                                        {algList.title}
                                    </Text>
                                    <Grid templateColumns={"repeat(5, 1fr)"}>
                                        {algList.algs.map((alg) => (
                                            <AlgCard
                                                alg={alg}
                                                isZBLS={algList.isZBLS}
                                            />
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
                    <Textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        height="full"
                    />
                </Grid>
            </Box>
        </ChakraProvider>
    );
};
