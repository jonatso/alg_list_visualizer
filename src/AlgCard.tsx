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
            p={1}
            m={1.5}
            display="flex"
            flexDirection="column"
        >
            <AlgImage alg={alg} isZBLS={isZBLS} />
            <Text m={2} mt={0} fontSize="md" fontWeight={"medium"}>
                {alg}
            </Text>
        </Box>
    );
}
