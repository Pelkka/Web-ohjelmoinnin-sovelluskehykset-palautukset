import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  


}

addstuff = (stuffdescription) => {
  return () => {
    const searchresult =this.state.items.findIndex((element, index, array) => {
      if(element.value === stuffdescription) {
        return true;
      }
        else {
          return false;
        }
      });
    if(searchresult !== -1)
    {console.log("a")
      let newitems = [...this.state.items];
      newitems[searchresult].qty += (Math.floor(Math.random() * 10) + 1);

      this.setState({items: newitems});
    }
    else 
    {console.log('b')
    this.setState({items:
       [...this.state.items,
        {id: this.state.items.length + 1,
           value: stuffdescription, qty: Math.floor(Math.random() * 10) + 1}]})
}; 
}}
 /* 
addcarrots = () =>{
  this.setState({items: [...this.state.items,{id: 5, value: 'Carrots', qty: 2, unit: 'x'}]});
}
addstrawberries = () =>{
  this.setState({items: [...this.state.items,{id: 6, value: 'Strawberries', qty: 1, unit: 'x'}]});
}
addyogurt = () =>{
  this.setState({items: [...this.state.items,{id: 7, value: 'Yogurt', qty: 3, unit: 'x'}]});
}
addbeer = () =>{
  this.setState({items: [...this.state.items,{id: 8, value: 'Beer', qty: 4, unit: 'x'}]});
}*/
 random(){
  const a=Math.floor(Math.random() * 10) + 1;
  return(a)
 }

 render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addstuff('carrots')}>carrots</button>
      <button onClick={this.addstuff('strawberries')}>strawberries</button>
      <button onClick={this.addstuff('yogurt')}>yogurt</button>
      <button onClick={this.addstuff('beer')}>beer</button>
    </div>
  }
}

export default App;