import { Decimal } from "decimal.js";

export function plus(left, right) {
  try {
    const leftD = new Decimal(left);
    const rightD = new Decimal(right);
    return leftD.plus(rightD).toNumber();
  } catch (e) {
    return 0.0;
  }
}

export function minus(left, right) {
  try {
    const leftD = new Decimal(left);
    const rightD = new Decimal(right);
    return leftD.minus(rightD).toNumber();
  } catch (e) {
    return 0.0;
  }
}

export function times(left, right) {
  try {
    const leftD = new Decimal(left);
    const rightD = new Decimal(right);
    return leftD.times(rightD).toNumber();
  } catch (e) {
    return 0.0;
  }
}

export function dividedBy(left, right) {
  try {
    const leftD = new Decimal(left);
    const rightD = new Decimal(right);
    return leftD.dividedBy(rightD).toNumber();
  } catch (e) {
    return 0.0;
  }
}

export function equals(left, right) {
  try {
    const leftD = new Decimal(left);
    const rightD = new Decimal(right);
    return leftD.equals(rightD);
  } catch (e) {
    return false;
  }
}
