import React, { FC } from "react";
import "./TransactionCard.css";
import { ITransaction } from "../../types";
import { GoPrimitiveSquare } from "react-icons/go";

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

          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">email:</span> {Email}
          </p>
          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">username:</span> {UserName}
          </p>
          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">lastLogin:</span> {LastLogin}
          </p>
          <p>
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">paymentMethod:</span> {PaymentMethod}
          </p>

          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">creditCardNumber:</span>{" "}
            {CreditCardNumber}
          </p>
          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">creditCardType:</span>{" "}
            {CreditCardType}
          </p>

          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">domainName:</span> {DomainName}
          </p>
          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">URL:</span>{" "}
            <a href={URL} target="_blank" rel="noreferrer">
              {URL}
            </a>
          </p>
          <p className="card__list">
            <GoPrimitiveSquare className="icon" />
            <span className="card__title">macAddress:</span> {MacAddress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
