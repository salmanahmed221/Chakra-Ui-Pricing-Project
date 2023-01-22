import { Icon, HStack, Text, StackProps, Box, Flex } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  MoneyBackGuranteeIcon,
  HasleFreeIcon,
  MonthlySubscriptionIcon,
} from "@/icons/Icon";

interface FeaturesProps extends StackProps {
  icon: ElementType;
}

export default function Feature(props: FeaturesProps) {
  const { icon, children, ...rest } = props;
  return (
    <div>
      <HStack {...rest} spacing="24px">
        <Icon as={icon} boxSize="48px" />
        <Text textAlign="left" fontSize="18px" fontWeight="700">
          {children}
        </Text>
      </HStack>
    </div>
  );
}

export function Features() {
  return (
    <Box pt="60px" pb="32px">
      <Flex
        px="48px"
        gap="20px"
        fontSize={["12px", "16px", "18px", "20px"]}
        direction={["column", "column", "column", "row"]}
        mx="auto"
        maxW="70%"
      >
        <Feature icon={MoneyBackGuranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HasleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Flex>
    </Box>
  );
}
