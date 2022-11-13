import { Image } from "@chakra-ui/react";

export default function AlgImage({ alg }: { alg: string }) {
    return (
        <Image
            src={`https://cubing.net/api/visualcube/?fmt=svg&view=plan&sch=fff100,ff4b00,005aff,w,f6aa00,03af7a&case=${alg}`}
            alt={alg}
        />
    );
}
