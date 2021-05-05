import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

const PriceDiscount = ({ price, compareAtPrice }: PriceDiscountProps) => {
  return (
    <Flex textStyle="textMd">
      {compareAtPrice && (
        <Text
          pos="relative"
          mr={2}
          sx={{
            "&:after": {
              pos: "absolute",
              right: 0,
              left: 0,
              top: "0.7em",
              display: "block",
              h: "1px",
              w: "full",
              bg: "black",
              content: `""`,
            },
          }}
        >
          ${compareAtPrice}
        </Text>
      )}
      <Text fontWeight="700">${price}</Text>
    </Flex>
  );
};

interface PriceDiscountProps {
  price?: number;
  compareAtPrice?: number;
}

export default PriceDiscount;
