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
import WelcomeTogether from './pages/welcome-together';
import DetailedProjects from './pages/detailed_projects';
import ThisWebsite from './pages/this-website';
import PicCheck from './pages/piccheck';
import 'bootstrap/dist/css/bootstrap.min.css';
import Research from './pages/research';
import SimpleNN from './pages/simplenn';
import AIClass from './pages/aiclass';
import BalesTale from './pages/balestale';
import CrawfishCreek from './pages/crawfishcreek';
import Waffle from './pages/waffle';
import About from './pages/about';

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
      case "welcome_together":
        return (<WelcomeTogether switchPageTo={this.switchPageTo.bind(this)}/>)
      case "this-website":
        return (<ThisWebsite switchPageTo={this.switchPageTo.bind(this)}/>)
      case "piccheck":
        return (<PicCheck switchPageTo={this.switchPageTo.bind(this)}/>)
      case "research":
        return (<Research switchPageTo={this.switchPageTo.bind(this)}/>)
      case "simplenn":
        return (<SimpleNN switchPageTo={this.switchPageTo.bind(this)}/>)
      case "aiclass":
        return (<AIClass switchPageTo={this.switchPageTo.bind(this)}/>)
      case "balestale":
        return (<BalesTale switchPageTo={this.switchPageTo.bind(this)}/>)
      case "crawfishcreek":
        return (<CrawfishCreek switchPageTo={this.switchPageTo.bind(this)}/>)
      case "waffle":
        return (<Waffle switchPageTo={this.switchPageTo.bind(this)}/>)
      case "about":
        return (<About switchPageTo={this.switchPageTo.bind(this)}/>);
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
