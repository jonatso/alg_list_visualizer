import { Paper, Text, Box } from '@mantine/core';
import 'https://cdn.cubing.net/v0/js/cubing/twisty';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'twisty-player': any;
    }
  }
}

export default function AlgCard({ alg, isZBLS }: { alg: string; isZBLS?: boolean }) {
  return (
    <Paper
      withBorder
      radius="md"
    >
      <twisty-player
    style={{
      height: "100px",
      width: "100px",
      background: "#0088ff22",
    }}
    alg={alg}
    experimental-setup-anchor="end"
    experimental-setup-alg="x2"
    visualization="experimental-2D-LL"
    background="none"
    control-panel="none"
  ></twisty-player>
   

      <Text size="md" weight={500}>
        {alg}
      </Text>
    </Paper>
  );
}
