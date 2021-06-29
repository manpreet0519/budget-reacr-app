import { Container} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
function App() {
  return (
  <Container>
    <MainHeader title= 'Budget'/>
    <DisplayBalance size='small' label='Your Balance :' value='2,500.53'></DisplayBalance>
   <DisplayBalances></DisplayBalances>
   
    <MainHeader title="History" type='h3'></MainHeader>
    <EntryLine isExpense='true' title='something' value='$10'></EntryLine>
    <EntryLine title='something' value='$20'></EntryLine>
    <EntryLine isExpense='true' title='something' value='$30'></EntryLine>
    <MainHeader title='Add new transaction' type='h3'></MainHeader>
  
    <NewEntryForm />
  </Container>
  );
}

export default App;
