import React, { useState } from 'react'
import './styles.css';
import axios from 'axios'

function CreateScreen() {

    const [employeeData, setEmployeData] = useState({
        employeName: '',
        dob: '',
        gender: '',
        accomodationType: '',
        accomodationIdentity: '',
        address: ''
    })

    const validateDataRequest = (request) => {
        let invalidData = 'Theese values are required to save.'
        if (request.employeName === "") {
            invalidData = invalidData + 'Employee Name,'
        } if (request.dob === '') {
            invalidData = invalidData + 'Date Of Birth,'
        } if (request.gender === "") {
            invalidData = invalidData + 'Gender,'
        } if (request.accomodationType === "") {
            invalidData = invalidData + 'Accomodation Type'
        }
        alert(invalidData)
    }

    const submitEmployeData = e => {
        console.log(employeeData)
        validateDataRequest(employeeData)
        axios.post('', employeeData)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        e.preventDefault()
    }

    const resetForm = () => {
        setEmployeData({
            employeName: '',
            dob: '',
            gender: '',
            accomodationType: '',
            accomodationIdentity: '',
            address: ''
        })
    }

    let accomodationIdText, accomodationIdInput
    if (employeeData.accomodationType === 'ownHouse') {
        accomodationIdText = "House Id : "
        accomodationIdInput = <input type="text" value={employeeData.accomodationIdentity} onChange={e => setEmployeData({ ...employeeData, accomodationIdentity: e.target.value })} />
    } else if (employeeData.accomodationType === 'officeQuarters') {
        accomodationIdText = "QuarterId Id : "
        accomodationIdInput = <input type="text" value={employeeData.accomodationIdentity} onChange={e => setEmployeData({ ...employeeData, accomodationIdentity: e.target.value })} />
    } else if (employeeData.accomodationType === 'apartments') {
        accomodationIdText = "Apartment Name : "
        accomodationIdInput = <input type="text" value={employeeData.accomodationIdentity} onChange={e => setEmployeData({ ...employeeData, accomodationIdentity: e.target.value })} />
    }


    return (
        <div>
            <hr></hr>

            <form className onSubmit={submitEmployeData}>
                <fieldset className='fieldSet width'>
                    <legend>Employee Create</legend>
                    <div className='margin-bottom'>Employee Name :
                        <input type="text" value={employeeData.employeName} onChange={e => setEmployeData({ ...employeeData, employeName: e.target.value })} />
                        <label for="birthday">Date Of Birth:</label>
                        <input type="date" value={employeeData.dob} onChange={e => setEmployeData({ ...employeeData, dob: e.target.value })}></input>
                    </div>
                    <div className='margin-bottom'>Gender :
                        <input type="radio" value="Male" checked={employeeData.gender === 'Male'} onChange={e => setEmployeData({ ...employeeData, gender: e.target.value })} />Male
                        <input type="radio" value="Female" checked={employeeData.gender === "Female"} onChange={e => setEmployeData({ ...employeeData, gender: e.target.value })} />Female
                        <input type="radio" value="Others" checked={employeeData.gender === "Others"} onChange={e => setEmployeData({ ...employeeData, gender: e.target.value })} />Others
                    </div>

                    <div className='margin-bottom'>
                        <label>Accomodation Type : </label>
                        <select value={employeeData.accomodationType} onChange={e => setEmployeData({ ...employeeData, accomodationType: e.target.value })}>
                            <option value=''>------Select------</option>
                            <option value='ownHouse'>Own House</option>
                            <option value='officeQuarters'>Office Quarters</option>
                            <option value='apartments'>Apartments</option>
                        </select>
                        {accomodationIdText}
                        {accomodationIdInput}
                    </div>
                    <div>

                    </div>
                    <div>
                        <label>Address : </label>
                        <textarea rows="3" cols="30" className='text-area' value={employeeData.address} onChange={e => setEmployeData({ ...employeeData, address: e.target.value })}></textarea>
                    </div>
                    <div className='margin'>
                        <button type="submit" className='margin-right'>Save</button>
                        <button type="button" onClick={resetForm}>Reset</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

export default CreateScreen
