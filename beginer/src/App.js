import logo from './logo.svg'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'
import BareButton from './BareButton'
import LoginControl from './LoginControl'
import CorrectlyState from './CorrectlyState'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'
import UnControlComponent from './Form/UnControlComponent'
import Calculator from './Calculator/Calculator'
import FilterableProductTable from './ThinkingInReact/FilterableProductTable '

function App() {
  return (
    <div className='App'>
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput type='password' value='100' autoFocus={true} className='inputControl' />
        <BareButton />
      </Layout> */}
      {/*
      <LoginControl isLoggedIn={false} /> */}

      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UnControlComponent /> */}
      {/* <Calculator /> */}
      <FilterableProductTable />
    </div>
  )
}

export default App
