import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './bricks/header';
import ShoppingList from './bricks/shoppingList';
import UserList from './bricks/userList';

function App() {
  return (
    <div className='App'>

      <div>
      <Header/>
      </div>

      <ShoppingList/>

      <h1>Users</h1>
      <UserList/>

    </div>
  );
}

export default App;
