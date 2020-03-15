// 輸出貨幣數字標準格式：千分位符號(or not)、無條件捨去、取到最細小數位數（between 2 and 6）
import { Decimal } from "decimal.js";

const DECIMAL_PLACE_FOR_INTEGER = 0;
const DECIMAL_PLACE_FOR_FLOAT = 2;
const DECIMAL_PLACE_FOR_RATE = 4;

export function formatInteger(num, withThousandSeparator = true) {
  try {
    return formatDecimal(num, DECIMAL_PLACE_FOR_INTEGER, withThousandSeparator);
  } catch (e) {
    // console.error(e.message)
    return 0;
  }
}

export function formatFloat(num, withThousandSeparator = true) {
  try {
    return formatDecimal(num, DECIMAL_PLACE_FOR_FLOAT, withThousandSeparator);
  } catch (e) {
    // console.error(e.message)
    return 0;
  }
}

export function formatRate(num, withThousandSeparator = true) {
  try {
    return formatDecimal(num, DECIMAL_PLACE_FOR_RATE, withThousandSeparator);
  } catch (e) {
    // console.error(e.message)
    return 0;
  }
}

// 輸出貨幣數字標準格式：千分位符號(with or without)、四捨五入（ROUND_HALF_EVEN）
export function formatDecimal(num, decimalPlace = 2, withThousandSeparator = true) {
  try {
    const myDecimal = new Decimal(num);
    const truncated = myDecimal
      .toDecimalPlaces(decimalPlace, Decimal.ROUND_HALF_UP)
      .toNumber();

    if (withThousandSeparator) {
      // 包含千分位符號，輸出格式為String
      return truncated.toLocaleString("en-US", {
        style: "decimal",
        maximumFractionDigits: decimalPlace,
        minimumFractionDigits: decimalPlace
      });
    } else {
      // 不包含千分位符號，輸出格式為Number
      // TODO type bug?
      return truncated;
    }
  } catch (e) {
    // console.error(e.message)
    return 0;
  }
}
