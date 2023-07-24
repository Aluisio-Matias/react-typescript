import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch'
// import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      {/* <UserSearch /> */}
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
