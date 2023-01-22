import { Icon, HStack, Text, StackProps, Box } from "@chakra-ui/react";
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
    <Box maxW="1024px" m="auto" pt="60px" pb="32px">
      <HStack px="48px" spacing="20px">
        <Feature icon={MoneyBackGuranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HasleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
