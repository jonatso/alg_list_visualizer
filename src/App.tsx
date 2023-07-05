import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    Grid,
    theme,
    Textarea,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AlgCard from "./AlgCard";
import parseInput from "./parseInput";
import { MdKeyboardHide } from "react-icons/md";

export const App = () => {

    const [inputValue, setInputValue] = useState(
        () => localStorage.getItem("algListInput") || ""
    );

    const [showInput, setShowInput] = useState(true);

    let algLists = parseInput(inputValue);

    useEffect(() => {
        localStorage.setItem("algListInput", inputValue);
    }, [inputValue]);

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl" height={"100vh"}>
                <Grid pl={2} templateColumns={showInput ? "70% 30%" : "100%"} height={"100vh"}>
                    <VStack spacing={3} height={"100vh"} overflow={"scroll"}>
                        <Text fontWeight={"bold"} fontSize={30}>
                            Alg List Visualizer
                        </Text>
                        {inputValue.length > 0 ? (
                            algLists.map((algList) => (
                                <Box>
                                    <Text fontWeight={"semibold"}>
                                        {algList.title}
                                    </Text>
                                    <Grid
                                        templateColumns={"repeat(5, 1fr)"}
                                        gap={2}
                                        width={"full"}
                                    >
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
                                with //, and put one alg per line. Put comments
                                on algs behind # 🤠
                            </Text>
                        )}
                    </VStack>
                    {showInput && <Textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        height="full"
                    />}
                </Grid>
                <IconButton icon={<MdKeyboardHide />} pos={'absolute'} bottom={5} right={5} zIndex={10} colorScheme="linkedin"  aria-label="show/hide input" onClick={() => setShowInput((o) => !o)}/>
            </Box>
        </ChakraProvider>
    );
};
