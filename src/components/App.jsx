// import PropTypes from "prop-types";
import { UserCard } from "./User/userCard/UserCard";
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionList from 'components/TransactionHistory/TransactionsList/TransactionsList';


import data from 'data/data.json';
import friends from 'data/friends.json'
import transactions from 'data/transactions.json';




export const App = () => {
  return (
    <>
      <h1>React homework template</h1>
      <UserCard />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </>
  );
};
