import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditUser extends Component {
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

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          gender: response.data.gender,
          news: response.data.news,
          photo: response.data.photo,
          email: response.data.email,
          DOB: new Date(response.data.dob),
         
         
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

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


    axios.put('http://localhost:5000/users/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

     window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit User </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>username: </label>
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
          <label>news: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.news}
              onChange={this.onChangeNews}
              />
        </div>
        <div className="form-group"> 
          <label>email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>photo: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.photo}
              onChange={this.onChangePhoto}
              />
        </div>
        <div className="form-group">
          <label>DOB: </label>
          <div>
            <DatePicker
              selected={this.state.dob}
              onChange={this.onChangeDOB}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}