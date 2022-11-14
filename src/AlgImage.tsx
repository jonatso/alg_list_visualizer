import { Image } from "@chakra-ui/react";

export default function AlgImage({ alg }: { alg: string }) {
    return (
        <Image
            src={`http://cubiclealgdbimagegen.azurewebsites.net/generator?&puzzle=3&case=${alg}&view=plan&stage=zbll`}
            alt={alg}
        />
    );
}
