import React, { useEffect, useState } from "react";
import axios from "axios";
import NProgress from "nprogress";
import { toast } from "react-toastify";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TransactionDetails from "./components/TransactionDetails/TransactionDetails";
import Pagination from "./components/Pagination/Pagination";
import {
  filterPaymentMethod,
  filterByCreditCardType,
  searchFilter,
} from "./helpers";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [postPerPage] = useState(20);
  const [filterByPaymentMethod, setFilterByPaymentMethod] = useState("");
  const [filterByGender, setfilterByGender] = useState("");
  const [search, setSearch] = useState("");
  const [profiledetails, setProfiledetails] = useState([]);

  const indexOfLastCard = currentPage * postPerPage;
  const indexOfFirstCard = indexOfLastCard - postPerPage;

  useEffect(() => {
    const getProfiles = async () => {
      try {
        NProgress.start();
        const { data } = await axios.get(
          "https://api.enye.tech/v1/challenge/records"
        );
        NProgress.done();
        toast.success("transaction profiles loaded successfully!");
        setProfiles(data.records.profiles);
      } catch (error) {
        NProgress.done();
        toast.error("something unexpected happen!!");
      }
    };
    getProfiles();
  }, []);

  useEffect(() => {
    let currentCard: any = profiles.slice(indexOfFirstCard, indexOfLastCard);
    setProfiledetails(currentCard);
  }, [indexOfFirstCard, indexOfLastCard, profiles]);

  const handlefilterByCreditCardType = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setfilterByGender(e.target.value);
    filterByCreditCardType(
      e.target.value,
      profiledetails,
      setProfiledetails,
      profiles,
      indexOfFirstCard,
      indexOfLastCard
    );
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByPaymentMethod(e.target.value);
    filterPaymentMethod(
      e.target.value,
      profiledetails,
      setProfiledetails,
      profiles,
      indexOfFirstCard,
      indexOfLastCard
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchFilter(
      e.target.value,
      profiledetails,
      setProfiledetails,
      profiles,
      indexOfFirstCard,
      indexOfLastCard
    );
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  return (
    <div>
      <Header />
      <Hero />

      <div className="search">
        <div>
          <input
            value={filterByPaymentMethod}
            onChange={handleFilter}
            type="text"
            placeholder="Filter by Payment Method"
            className="search__input"
          />
          <input
            value={filterByGender}
            onChange={handlefilterByCreditCardType}
            type="text"
            placeholder="Filter by Credit Card Type"
            className="search__input"
          />
        </div>
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          placeholder="search the transaction"
          className="search__bar"
        />
      </div>
      <TransactionDetails profiles={profiledetails} />
      <Pagination
        totalCards={profiles.length}
        postPerPage={postPerPage}
        paginate={paginate}
        activePage={activePage}
      />
    </div>
  );
}

export default App;
