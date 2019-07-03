import React,{Component} from 'react'
import TextField from 'material-ui/TextField';
import Select from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';


class Search extends Component{
   
      state={
          searchText:'',
          amount:15,
          key:'10264528-b2048680351575b4d96ab6126',
          apiUrl:'https://pixabay.com/api/',
          images:[]
      }

      onchange=(e)=>{
          this.setState({
              [e.target.name]:e.target.value
          },()=>{
              axios.get(`${this.state.apiUrl}/?key=${this.state.key}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
              .then(res=>this.setState({
                  images:res.data.hits
              }))
              .catch(er=>console.log(er))
          })
      }



    render(){
        console.log(this.state.images)
        return(
           <div>
            <TextField
            name='searchText'
            value={this.state.searchText}
            onChange={this.onchange}
            floatingLabelText='Searcg For Images'
            fullWith={true}
            />
          
           <br/>

            <Select
          value={this.state.amount}
          onChange={this.amount}
          name="Amount"
        
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
         </div>
    
        )
    }
}


export default Search