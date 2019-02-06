import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as fhir from 'lifen-fhir.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { patients: []} ;
    this.family = undefined;
    this.given = undefined;
    this.fhirClient = fhir({ baseUrl: 'http://localhost:8080/baseDstu3'});
  }
  async send() {
    const { given, family } = this;
    const result = await this.fhirClient.create({
      type: 'Patient',
      resource: {
        identifier: [{
          system: 'http://meetup-test',
          value: 'lifen'
        }],
        resourceType: 'Patient',
        name: [{
          given: [ given.value ],
          family: family.value
        }]
      }
    });

    this.setState({ patients: this.state.patients.concat(result.data) });
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fhir Meetup</h1>
          <div>
          <div>Nom: <input ref={input => this.family = input}/></div><br/>
          <div>Prénom: <input ref={input => this.given = input}/></div>

          </div>
          <button onClick={() => this.send()}>Envoyer !</button>
          <ul>
            {this.state.patients.map((patient, i) => patient.name && patient.name[0].given && <li key={i}>{patient.name[0].family} {patient.name[0].given[0]}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
