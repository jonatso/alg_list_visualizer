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
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Container that forces a square aspect ratio */}
      <Box style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
        <twisty-player
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: "#0088ff22",
          }}
          alg={alg}
          experimental-setup-anchor="end"
          experimental-setup-alg="x2"
          visualization= {isZBLS ? "experimental-2D-LL" : "experimental-2D-LL"}
          background="none"
          control-panel="none"
        ></twisty-player>
      </Box>

      <Text size="md" weight={500} m="xs">
        {alg}
      </Text>
    </Paper>
  );
}
