import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
//import PrivateRoute from './components/access/PrivateRoute'
import PublicRoute from './components/access/PublicRoute'

import Login from './components/login'
import Register from './components/register'
import Navbar from './components/mix.-btn'
import Profile from './components/user/userProfile'

import CreateCollection from './components/collections/create/collectionCreationPage'
import CreateItem from './components/items/create/itemCreationPage'

import PageUserCollections from './components/user/pageCollectionUser'

import AllCollectionsPage from './components/home/allCollectionsPage'
import AllItemsPage from './components/home/allItemsPage'

import FullInfoAboutCollection from './components/collections/component/showFullInfoAboutCollection'
import ShortInfoAboutCollection from './components/collections/component/showShortInfoAboutCollection'
import FullInfoAboutItem from './components/items/component/showFullInfoAboutItem'
import ShortInfoAboutItem from './components/items/component/showShortInfoAboutItem'

import ChangeCollectionPage from './components/collections/change/changeCollection'
import ChangeItemPage from './components/items/change/changeItem'




function App() {
  return (
      <Router>
        <Switch>
          <div className="App">
            <div className="App">
              <Navbar />
              <div className="container">
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PublicRoute exact path="/profile" component={Profile} />

                <PublicRoute exact path="/add-new-collection" component={CreateCollection}/> 
                <PublicRoute exact path="/create-item" component={CreateItem}/>

                <PublicRoute exact path="/collections-current-user" component={ PageUserCollections}/>

                <Route exact path="/home" component={AllCollectionsPage}/>
                <Route exact path="/home" component={AllItemsPage}/>
 
                <Route exect path="/full-info-about-collection" component={FullInfoAboutCollection}/>
                <Route exact path="/short-info-about-collection" component={ShortInfoAboutCollection}/>
                <PublicRoute exact path='/full-info-about-item' component={FullInfoAboutItem}/>
                <Route exact path='/short-info-about-item' component={ShortInfoAboutItem}/>

                <Route exact path="/change-collection" component={ChangeCollectionPage}/>
                <Route exact path='/change-item' component={ChangeItemPage}/>
              
              </div>
            </div>
          </div>
        </Switch>
      </Router>
  )
}

export default App