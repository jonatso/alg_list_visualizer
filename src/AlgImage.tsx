import { useEffect, useRef } from "react";
import { TwistyPlayer } from "cubing/twisty";
import { Box } from "@chakra-ui/react";

const AlgImage = ({ alg, isZBLS }: { alg: string; isZBLS?: boolean }) => {
    const playerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const player = new TwistyPlayer({
            puzzle: "3x3x3",
            alg,
            experimentalSetupAnchor: "end",
            background: "none",
            experimentalSetupAlg: "x2",
            controlPanel: "none",
            visualization: isZBLS ? "experimental-2D-LL" : "experimental-2D-LL",
        });
        playerRef.current?.appendChild(player);
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            playerRef.current?.removeChild(player);
        };
    });
    return (
        <Box
            ref={playerRef}
            overflow="hidden"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        />
    );
};

export default AlgImage;
