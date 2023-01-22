import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Box pb="28" as="section">
        <Box
          width="1440px"
          height="397px"
          backgroundColor="#6B46C1"
          pt="98px"
          pb="198px"
          textAlign={["left", "left", "center"]}
        >
          <Heading
            color="white"
            fontWeight="extrabold"
            fontSize={["3xl", "3xl", "5xl"]}
            lineHeight="130%"
            textAlign={["left", "left", "center"]}
            pt="4"
          >
            Simple pricing for your business
          </Heading>
          <Text
            color="white"
            fontWeight="medium"
            fontSize={["lg", "lg", "2xl"]}
            textAlign={["left", "left", "center"]}
            lineHeight="32px"
          >
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </Box>
    </div>
  );
}
