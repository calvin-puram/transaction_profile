import React, { FC } from "react";
import "./TransactionDetails.css";
import TransactionCard from "../TransactionCard/TransactionCard";
import { ITransaction } from "../../types";

type ITransactionDetails = {
  profiles: ITransaction[];
};

const TransactionDetails: FC<ITransactionDetails> = (props) => {
  const { profiles } = props;
  return (
    <div className="transaction">
      {profiles &&
        profiles.map((items) => (
          <TransactionCard items={items} key={items.CreditCardNumber} />
        ))}
    </div>
  );
};

export default TransactionDetails;
