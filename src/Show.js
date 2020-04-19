import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Show extends Component {

    state = {
        code:'',
        name:'',
        native:'',
        currency:'',
        emoji:'',
        phone:''
    }
   
    componentDidMount(){

        axios.post('https://countries.trevorblades.com/', { query: `
        query{
            country(code: "${this.props.match.params.id}"){
              name
              code
              emoji
              phone
              currency
              native
            }
        }`
        }

        ).then(res =>{
            console.log(res.data.data)
            console.log(this.props.match.params.id)
            this.setState({
                code: res.data.data.country.code,
                name: res.data.data.country.name,
                native: res.data.data.country.native,
                currency: res.data.data.country.currency,
                emoji: res.data.data.country.emoji,
                phone: res.data.data.country.phone
            })
        })     
    }

   render(){ 
        return(
            <div className="show-page">  
                <h5>Country: {this.state.code}</h5> <br></br>
                <div className="details">
                    <table >
                        <tr>
                            <td>name <br></br><span>{this.state.name}</span></td> 
                            <td>emoji: <br></br><img src= {`https://www.countryflags.io/${this.state.code}/flat/32.png`} alt=""></img></td> 
                        </tr>
                        <tr>
                            <td>native <br></br><span>{this.state.native}</span></td> 
                            <td>phone: <br></br><span>{this.state.phone}</span></td>
                        </tr>
                        <tr>
                            <td>currency <br></br><span>{this.state.currency}</span></td> 
                        </tr>
                    </table>
                </div>
                <button onClick ={(e)=> {this.props.history.push('/index')}}>BACK</button>
                
            </div>  
        )
   }    
}

export default withRouter(Show)