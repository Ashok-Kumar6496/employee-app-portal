import axios from 'axios';
import React, { useState } from 'react'
import SearchTable from './SearchTable';
import './styles.css';


function SearchScreen() {
    const [searchRequest, setSearchRequest] = useState({
        param: '',
        value: ''
    })
    const [res, setRes] = useState([])
    const fetchData = () => {
        console.log(searchRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setRes(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    let searchButton = <button type="button" onClick={fetchData}>Search</button>
    let searchTextInput = <input type="text" placeholder="Search" value={searchRequest.value} onChange={e => setSearchRequest({ ...searchRequest, value: e.target.value })} />
    let searchDateInput = <input type="date" value={searchRequest.value} onChange={e => setSearchRequest({ ...searchRequest, value: e.target.value })}></input>
    return (
        <div>
            <div className='right-component'>
                <label>Search By : </label>
                <select value={searchRequest.param} onChange={e => setSearchRequest({ ...searchRequest, param: e.target.value })}>
                    <option value=''>------Select------</option>
                    <option value="id">Id</option>
                    <option value="name">Name</option>
                    <option value="dob">DoB</option>
                    {/* <option value="gender">Gender</option> */}
                    <option value="accType">Acc Type</option>
                    <option value="accIdentity">Acc Identity</option>
                </select>
                {
                    searchRequest.param === 'name' || searchRequest.param === 'accType' ||
                        searchRequest.param === 'accIdentity' || searchRequest.param === 'id' ?
                        <div>
                            {searchTextInput}
                            {searchButton}
                        </div> : ''
                }
                {
                    searchRequest.param === 'dob' ?
                        <div>
                            {searchDateInput}
                            {searchButton}
                        </div> : ''
                }
            </div>
            <div className="table-position">
                <SearchTable data={res} />
            </div>
        </div>
    )
}

export default SearchScreen
