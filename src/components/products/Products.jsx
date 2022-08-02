import React, { Component } from "react";

// class Products extends React.Component {
export class Products extends Component {
  constructor(props) {
    super(props);
    // console.log("cons", props);
    this.name = "Products";
    this.state = {
      products: ["Acer", "MacBook", "Pavilion", "SurfacePro"],
      user: {
        username: "",
        password: "",
      },
      title: "Products list",
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.titleRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // console.log("component did mount", this.titleRef.current);
  }

  changeTitle() {
    this.name = "A new product name";
    // console.log(this.name);
    // const title = `A title another title`;
    // this.setState({
    //   title: title,
    // });
  }

  handleSubmit = (e, str) => {
    e.preventDefault();
    // console.log(
    //   this.state.user,
    //   this.inputRef.current.value,
    //   str
    // );
  };

  handleInputChange = (e) => {
    // const currentUser = this.state.user;
    const updatedUser = { ...this.state.user };
    // const olderWay = Object.assign({}, this.state.user); // old way to copy an object
    // const olderWayArr = [].concat([1,2,3,4]); // old way to copy an array
    // console.log(updatedUser);
    updatedUser[e.target.id] = e.target.value;
    this.setState({
      user: updatedUser
    });
  };

  handleUsernameChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        username: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h1 data-id="elec" ref={this.titleRef}>
          {this.state.title} | {this.state.products.join(" ")}
        </h1>
        <h2>
          {this.name} | {this.props.category} | {this.props.subCategory}
          {10 + 20 === 20 ? "Equal to 20" : "Not equal"}
        </h2>
        <form onSubmit={(e) => this.handleSubmit(e, "hello")}>
          <input
            type="email"
            name="username"
            id="username"
            value={this.state.user.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.user.password}
            onChange={this.handleInputChange}
          />
          <input type="text" ref={this.inputRef} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.changeTitle}>Change Title</button>
        <button
          onClick={() => {
            alert("TItle change two");
          }}
        >
          Change Title
        </button>
      </div>
    );
  }
}

// mounting
// constructor
// componentWillMount() -> deprecated
// static getSnapshotfromProps()
// render // whenever there is a change in props/state value, then it triggers rerender.
// componentDidMount()

// updating
//
// unmounting
