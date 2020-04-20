import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'

const IndexPage = ({newUser}) => {                                   //I've passed the newUser coming from redux store as props

    const [countries, setCountries] = useState([]);

    useEffect (() => {

        axios.post('https://countries.trevorblades.com/', { 
            query: `
                query{
                    countries{
                        name
                        code
                        emoji
                    }
                }`

            }).then(res =>{
                setCountries(res.data.data.countries)
            }) 
    })

    const countriesList = countries.map(country =>{
        return(
             <tbody key={country.code}>
                 <tr>
                     <td>{country.code}</td>
                     <td>{country.name}</td>
                     <td><img src= {`https://www.countryflags.io/${country.code}/flat/32.png`} alt=""></img></td>
                     <Link to ={`/show/${country.code}`}><td><i className="material-icons">visibility</i></td></Link>
                 </tr>
             </tbody>
        )
    })

    return (  
        <div className="IndexPage">  
            <div className= "user-page">User page</div>
                <div className = "userData">
                    <span>user email: {newUser.email} </span><br></br>
                    <span>user password: {newUser.password}</span>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>code</th>
                                <th>name</th>
                                <th>emoji</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        {countriesList}
                    </table>
                </div>
        </div> 

    );
}
 
const mapStateToProps = (state) =>{
    return { newUser: state }
}

export default connect(mapStateToProps)(IndexPage);
