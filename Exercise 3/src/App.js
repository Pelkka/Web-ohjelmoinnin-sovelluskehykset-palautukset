
import './App.css';
import data from './data.json'
import React from 'react';
import SearchView from './components/SearchView';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      items: data.items,
      SearchString: ""
    }
  }


onSearchFieldChange = (event) => {

console.log('aaaa');
console.log(event.target.value);
this.setState({SearchString: event.target.value});
/*this.setState({ items: this.state.items.filter(item => item.name.includes(this.state.SearchString))});*/

}



render()
{
  return(
    <>
    <input type="text" onChange={this.onSearchFieldChange} value={this.state.SearchString}/>
    <SearchView
    items={ this.state.items.filter((item)  => item.name.includes(this.state.SearchString)) }

    />
    </>
  )
}
}

export default App;
