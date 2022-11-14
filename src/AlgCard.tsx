import { Box, Text } from "@chakra-ui/react";
import AlgImage from "./AlgImage";

export default function AlgCard({
    alg,
    isZBLS,
}: {
    alg: string;
    isZBLS?: boolean;
}) {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={3}
            m={3}
            display="flex"
            flexDirection="column"
        >
            <AlgImage alg={alg} isZBLS={isZBLS} />
            <Text m={3} fontSize="lg" fontWeight={"medium"}>
                {alg}
            </Text>
        </Box>
    );
}
