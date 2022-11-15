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
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={1}
            display="flex"
            flexDirection="column"
            width={"full"}
        >
            <AlgImage alg={alg} isZBLS={isZBLS} />
            <Text m={2} mt={0} fontSize="md" fontWeight={"medium"}>
                {alg}
            </Text>
        </Box>
    );
}
