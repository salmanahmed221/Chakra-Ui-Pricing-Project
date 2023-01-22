import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Box as="section">
        <Box bg="#6B46C1" pt="98px" pb="198px" textAlign="center">
          <Heading
            color="white"
            fontWeight="extrabold"
            fontSize={["3xl", "3xl", "5xl"]}
            lineHeight="130%"
            pt="4"
          >
            Simple pricing for your business
          </Heading>
          <Text
            color="white"
            fontWeight="medium"
            fontSize={["lg", "lg", "2xl"]}
            lineHeight="32px"
          >
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </Box>
    </div>
  );
}
