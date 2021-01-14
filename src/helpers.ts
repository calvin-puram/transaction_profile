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
    const newData: any = dat.filter(
      (card: any) =>
        card.FirstName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.LastName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.Gender.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.Email.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.PhoneNumber.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.URL.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.UserName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.MacAddress.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        card.LastLogin.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    return setDat(newData);
  } else {
    //@ts-ignore
    return setDat(profiles.slice(indexOfFirstCard, indexOfLastCard));
  }
};
