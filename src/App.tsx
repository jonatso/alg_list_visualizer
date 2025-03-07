import {
	Box,
	Button,
	Grid,
	MantineProvider,
	SimpleGrid,
	Text,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import AlgCard from "./AlgCard";
import parseInput from "./parseInput";

export const App = () => {
	const [inputValue, setInputValue] = useLocalStorage({
		key: "algListInput",
		defaultValue: "",
	});
	const [showInput, setShowInput] = useState(true);

	const algLists = parseInput(inputValue);

	return (
		<MantineProvider>
			<Grid columns={10} h="100vh" p={10}>
				<Grid.Col
					span={showInput ? 7 : 10}
					style={{
						height: "100vh",
						overflowY: "auto",
					}}
					h="100vh"
				>
					<Text size="xl" fw={700}>
						Alg List Visualizer
					</Text>
					{inputValue.length > 0 ? (
						algLists.map((algList, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Box key={index} mb="sm">
								<Text fw={500} size="mg">
									{algList.title}
								</Text>
								<SimpleGrid cols={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing="sm">
									{algList.algs.map((alg, i) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<AlgCard key={i} alg={alg} isZBLS={algList.isZBLS} />
									))}
								</SimpleGrid>
							</Box>
						))
					) : (
						<Text>
							🤠 Seperate each alg list with a line starting with //, and put
							one alg per line. Put comments on algs behind # 🤠
						</Text>
					)}
				</Grid.Col>
				{showInput && (
					<Grid.Col span={3}>
						<textarea
							value={inputValue}
							onChange={(e) => setInputValue(e.currentTarget.value)}
							style={{
								width: "100%",
								height: "98vh",
								resize: "none",
								padding: 5,
							}}
						/>
					</Grid.Col>
				)}
			</Grid>
			<Button
				pos="absolute"
				bottom={5}
				right={5}
				zIndex={10}
				color="blue"
				onClick={() => setShowInput((o) => !o)}
				title="Show/hide input"
			>
				Show/hide input
			</Button>
		</MantineProvider>
	);
};
