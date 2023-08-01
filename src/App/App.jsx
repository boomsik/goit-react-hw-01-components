
import User from '../Component/User/User';
import Statistics from '../Component/Statistics/Statistics';
import './App.css';
import user from '../data/user.json';
import data from '../data/data.json';
import FriendList from '../Component/FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from '../Component/TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';


function App() {
  return (
    <div >
      <User
        img = {user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
