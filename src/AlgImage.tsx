import { Image } from "@chakra-ui/react";

export default function AlgImage({
    alg,
    isZBLS,
}: {
    alg: string;
    isZBLS?: boolean;
}) {
    return (
        <Image
            src={`http://cubiclealgdbimagegen.azurewebsites.net/generator?&puzzle=3&case=${alg}&view=plan&stage=${
                isZBLS ? "vh" : "zbll"
            }&size=200`}
            alt={alg}
        />
    );
}
