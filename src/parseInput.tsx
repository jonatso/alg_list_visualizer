export default function parseInput(input: string) {
    let algLists: { title: string; algs: string[]; isZBLS: boolean }[] = [];
    // split input into alg lists. Each alg list is seperated by a line starting with //, and each alg with a line
    let algListStrings = input.split("//");

    // for each alg list, split it into title and algs
    for (let algListString of algListStrings) {
        let algListLines = algListString.split("\n");

        let algList: { title: string; algs: string[]; isZBLS: boolean } = {
            title: algListLines[0],
            algs: algListLines
                .filter((line) => line !== "")
                .slice(1)
                .map((line) => line.split("#")[0]),
            isZBLS: algListLines[0].includes("ZBLS"),
        };
        // remove empty lines
        // remove title
        algLists.push(algList);
    }
    return algLists;
}
