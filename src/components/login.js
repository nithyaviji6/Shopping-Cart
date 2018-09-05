import React,{Component} from 'react';

 
 class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
     
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
      alert("USER LOGIN SUCCESSFULL!!!");
    //return this.setState({ error: 'USER LOGIN SUCCESSFULL!!' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    
    return (
      <div className="id">
      <div className="Login">
<center>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <br/>
          <br/>
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

        <br/>
        <br/>
          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          <br/>
            <br/>
          <input type="submit" value="Log In" data-test="submit" />
        </form>
        </center>
      </div>
      </div>
    );
  }
}

export default Login;