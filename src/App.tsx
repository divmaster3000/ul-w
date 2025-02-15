import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <HStack wrap="wrap" gap="6">
      <Button background="{colors.primary.500}" variant="solid">
        Solid
      </Button>
      <Button background="{colors.success.500}" variant="subtle">
        Subtle
      </Button>
      <Button background="{colors.warning.500}" variant="surface">
        Surface
      </Button>
      <Button background="{colors.error.500}" variant="outline">
        Outline
      </Button>
      <Button background="{colors.info.500}" variant="ghost">
        Ghost
      </Button>
      <Button variant="plain">Plain</Button>
    </HStack>
  );
}

export default App;
