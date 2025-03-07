import { MantineProvider, Box, Text, Grid, Stack, Textarea, ActionIcon, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import AlgCard from './AlgCard';
import parseInput from './parseInput';
import { MdKeyboardHide } from 'react-icons/md';
import '@mantine/core/styles.css';


export const App = () => {
  const [inputValue, setInputValue] = useState(() => localStorage.getItem("algListInput") || "");
  const [showInput, setShowInput] = useState(true);

  const algLists = parseInput(inputValue);

  useEffect(() => {
    localStorage.setItem("algListInput", inputValue);
  }, [inputValue]);

  console.log(algLists)

  return (
    <MantineProvider>
      <Box style={{ textAlign: 'center', fontSize: 'xl', height: '100vh', position: 'relative' }}>
        <Grid columns={10} style={{ height: '100vh' }}>
          <Grid.Col span={showInput ? 7 : 10} style={{ height: '100vh', overflowY: 'auto', paddingLeft: 8 }}>
            <Stack gap="md">
              <Text weight={700} size="xl" fw={700}>
                Alg List Visualizer
              </Text>
              {inputValue.length > 0 ? (
                algLists.map((algList, index) => (
                  <Box key={index}>
                    <Text weight={500}>{algList.title}</Text>
                    <SimpleGrid cols={5} spacing="sm">
                      {algList.algs.map((alg, i) => (
                        <AlgCard key={i} alg={alg} isZBLS={algList.isZBLS} />
                      ))}
                    </SimpleGrid>
                  </Box>
                ))
              ) : (
                <Text>
                  🤠 Seperate each alg list with a line starting with //, and put one alg per line. Put comments on algs behind # 🤠
                </Text>
              )}
            </Stack>
          </Grid.Col>
          {showInput && (
            <Grid.Col span={3} style={{ height: '100vh' }}>
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
                h="full"
              />
            </Grid.Col>
          )}
        </Grid>
        <ActionIcon
          style={{ position: 'absolute', bottom: 5, right: 5, zIndex: 10 }}
          color="blue"
          onClick={() => setShowInput((o) => !o)}
          title="Show/hide input"
          size="lg"
        >
          <MdKeyboardHide size={24} />
        </ActionIcon>
      </Box>
    </MantineProvider>
  );
};
