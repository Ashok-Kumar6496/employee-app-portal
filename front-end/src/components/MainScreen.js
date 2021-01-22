import React from 'react'
import CreateScreen from './CreateScreen'
import SearchScreen from './SearchScreen'
import './styles.css'

function MainScreen() {
    return (
        <div>
            <u>
                <h1 className="App" >Employee Application
                </h1>
            </u>
            <CreateScreen />
            <div class="vertical"></div>
            <SearchScreen />
        </div>
    )
}

export default MainScreen
