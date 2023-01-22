import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  Stack,
  background,
  StackProps,
} from "@chakra-ui/react";
import Checkicon from "@/icons/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={Checkicon} width="22px" height="22px" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <div>
      <Box mx="6">
        <Box
          maxW="994px"
          margin="auto"
          mt="-256px"
          borderRadius="12px"
          overflow="hidden"
        >
          <Flex direction={["column", "column", "row"]}>
            <Box
              textAlign="center"
              width="378PX"
              height="336px"
              backgroundColor="#F0EAFB"
              padding="60px"
            >
              <Text fontWeight="800" fontSize="24px" line-height="32px">
                Premium PRO
              </Text>
              <Heading
                fontWeight="800"
                fontSize={["5xl", "5xl", "6xl"]}
                lineHeight="100%"
              >
                $329
              </Heading>
              <Text fontWeight="500" fontSize="18px" lineHeight="38px">
                billed just once
              </Text>
              <Button
                background="#805AD5"
                width="230px"
                height="51px"
                border-borderRadius="8px"
                mt="24px"
              >
                Get Started
              </Button>
            </Box>
            <Box padding="60px" fontSize="18px" bg="white">
              <Text textAlign="left">
                Access these features when you get this pricing package for your
                business.
              </Text>
              <Stack as="ul" spacing="20px" pt="24px">
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
