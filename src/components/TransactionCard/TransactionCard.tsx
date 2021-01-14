import React, { FC } from "react";
import "./TransactionCard.css";
import { ITransaction } from "../../types";

interface CardProps {
  items: ITransaction;
  key: string;
}

const TransactionCard: FC<CardProps> = (props) => {
  const {
    FirstName,
    LastName,
    Gender,
    Latitude,
    Longitude,
    CreditCardNumber,
    CreditCardType,
    Email,
    DomainName,
    PhoneNumber,
    MacAddress,
    URL,
    UserName,
    LastLogin,
    PaymentMethod,
  } = props.items;
  return (
    <div className="wrapper">
      <div className="card">
        <h6 className="profile__name">{`${FirstName} ${LastName}`}</h6>
        <div className="personal__info">
          <div className="personal__info-item">
            <p>Gender: {Gender}</p>
            <p>Phone: {PhoneNumber}</p>
          </div>

          <div className="personal__info-item">
            <p>Latitude: {Latitude}</p>
            <p>Longitude: {Longitude}</p>
          </div>
          <hr />

          <p>
            <span className="card__title">Email</span> : {Email}
          </p>
          <p>
            <span className="card__title">Username</span> : {UserName}
          </p>
          <p>
            <span className="card__title">LastLogin</span> : {LastLogin}
          </p>
          <p>
            <span className="card__title">PaymentMethod</span> : {PaymentMethod}
          </p>

          <p>
            <span className="card__title">CreditCardNumber</span>:{" "}
            {CreditCardNumber}
          </p>
          <p>
            <span className="card__title">CreditCardType</span>:{" "}
            {CreditCardType}
          </p>

          <p>
            <span className="card__title">DomainName</span>: {DomainName}
          </p>
          <p>
            <span className="card__title">URL</span>:{" "}
            <a href={URL} target="_blank" rel="noreferrer">
              {URL}
            </a>
          </p>
          <p>
            <span className="card__title">MacAddress</span>: {MacAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
