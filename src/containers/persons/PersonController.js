import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonList from '../../components/person/PersonList';
import PersonDetail from '../../components/person/PersonDetail';
import Person from '../../components/person/Person';
import Person from '../../helpers/request';


class PersonController extends Component {
  constructor (props) {
    super(props);
    this.state = {
      persons: []
    }

    this.findPersonById = this.findPersonById.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }


  componentDidMount(){
    const request = new Request();
    request.get('/api/persons')
    .then((data) => {
      this.setState({persons: data._embedded.persons})
      })
    }
    findPersonById(id){
      return this.state.persons.find((person) => {
        return person.id === parseInt(id);
      })
    }
     handlePost(person){
    const request = new Request();
    request.post("/api/persons/", person)
    .then(()=>{
      window.location ="/persons";
    })
  }

  render(){
    return(
      <Router>
        <React.Fragment>
         <Switch>
          <Route exact path="/persons" render={() =>
            <PersonList persons={this.state.persons}/> }/>

            <Route exact path="/persons/new" render={() =>{
              return <PersonFormContainer handlePersonPost = {this.handlePost}/>
                }}/>

            <Route exact path="/persons/:id"
              render={(props) => {
              const id = props.match.params.id;
              const person = this.findPersonById(id);
              return <PersonDetail person={person} />
           </Switch>
          </React.Fragment>
        </Router>
      )
    }
  }
}
  export default PersonController;