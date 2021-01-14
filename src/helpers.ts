import { ITransaction } from "./types";

export const filterPaymentMethod = (
  value: string,
  dat: ITransaction[],
  setDat: any,
  profiles: ITransaction[],
  indexOfFirstCard: number,
  indexOfLastCard: number
) => {
  if (value) {
    const newData: any = dat.filter(
      (card: any) =>
        card.PaymentMethod.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    return setDat(newData);
  } else {
    //@ts-ignore
    return setDat(profiles.slice(indexOfFirstCard, indexOfLastCard));
  }
};

export const filterByCreditCardType = (
  value: string,
  dat: ITransaction[],
  setDat: any,
  profiles: ITransaction[],
  indexOfFirstCard: number,
  indexOfLastCard: number
) => {
  if (value) {
    const newData: any = dat.filter(
      (card: any) =>
        card.CreditCardType.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    return setDat(newData);
  } else {
    //@ts-ignore
    return setDat(profiles.slice(indexOfFirstCard, indexOfLastCard));
  }
};

export const searchFilter = (
  value: string,
  dat: ITransaction[],
  setDat: any,
  profiles: ITransaction[],
  indexOfFirstCard: number,
  indexOfLastCard: number
) => {
  if (value) {
    const filteredData: ITransaction[] = dat.filter((item: any) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(value.toLowerCase())
      );
    });

    return setDat(filteredData);
  } else {
    //@ts-ignore
    return setDat(profiles.slice(indexOfFirstCard, indexOfLastCard));
  }
};
