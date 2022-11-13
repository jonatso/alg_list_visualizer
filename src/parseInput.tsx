export default function parseInput(input: string) {
    let algLists: { title: string; algs: string[] }[] = [];
    // split input into alg lists. Each alg list is seperated by a line starting with //, and each alg with a line
    let algListStrings = input.split("//");

    // for each alg list, split it into title and algs
    for (let algListString of algListStrings) {
        let algList: { title: string; algs: string[] } = {
            title: "",
            algs: [],
        };
        let algListLines = algListString.split("\n");
        algList.title = algListLines[0];
        // remove empty lines
        algListLines = algListLines.filter((line) => line !== "");
        // remove title
        algList.algs = algListLines.slice(1);
        algLists.push(algList);
    }
    return algLists;
}
