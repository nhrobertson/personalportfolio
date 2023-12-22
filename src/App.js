import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home'
import React from 'react';
import Projects from './pages/projects'
import AI from './pages/ai'
import Games from './pages/games'
import Contact from './pages/contact';
import Thanks from './pages/thanks';
import ProjectPageTemplate from './pages/project-page-template';
import DetailedProjects from './pages/detailed_projects';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    }
  }

  switchPageTo(newPage) {
    this.setState({currentPage: newPage})
  }

  renderContent() {
    switch(this.state.currentPage) {
      case "home":
        return (<Home />)
      case "projects":
        return (<Projects switchPageTo={this.switchPageTo.bind(this)}/>)
      case "games":
        return (<Games switchPageTo={this.switchPageTo.bind(this)}/>)
      case "ai":
        return (<AI switchPageTo={this.switchPageTo.bind(this)}/>)
      case "detailed_projects":
        return (<DetailedProjects switchPageTo={this.switchPageTo.bind(this)}/>)
      case "contact":
        return (<Contact switchPageTo={this.switchPageTo.bind(this)}/>)
      case "thanks":
        return (<Thanks switchPageTo={this.switchPageTo.bind(this)}/>)
      case "project_template":
        return (<ProjectPageTemplate switchPageTo={this.switchPageTo.bind(this)}/>)
    }
  }

  render() {
    return (
    <div>
      <NavBar switchPageTo={this.switchPageTo.bind(this)}/>
      {this.renderContent()}
    </div>
    );
  }
}

export default App;
