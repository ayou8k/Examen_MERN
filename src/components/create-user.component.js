import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeNews = this.onChangeNews.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      gender: '',
      news: 0,
      email:'',
      photo:'',
      dob: new Date(),
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeNews(e) {
    this.setState({
      news: e.target.value
    })
  }
  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeDOB(date) {
    this.setState({
      DOB: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      gender: this.state.gender,
      news: this.state.news,
      photo: this.state.photo,
      email: this.state.email,
      DOB: this.state.dob,
    }

    console.log(user);

    axios.post('http://localhost:5000/users', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label>Gender: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
              />
        </div>
        <div className="form-group">
          <label>News </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.news}
              onChange={this.onChangeNews}
              />
        </div>
        <div className="form-group">
          <label>email </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>photo </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.photo}
              onChange={this.onChangePhoto}
              />
        </div>
        <div className="form-group">
          <label>DOB: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDOB}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create New User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}