import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    /**
     * this.state used to create a state variable inside the class component
     */
    // this.state = {
    //   count: 0,
    // };
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // Api call
    const userData = await fetch("https://api.github.com/users/yash1213");
    const json = await userData.json();
    console.log("json :", json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    /**
     * when there is any rendering, this function gets called
     */
  }

  componentWillUnmount() {
    /**
     * use to clear things after the page gets called offf
     */
  }

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;
    /**
     * this.setState() is used to update the state variable
     */
    // this.setState({
    //   count: count + 1,
    // });
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @yash1112</h4>
      </div>
    );
  }
}

export default UserClass;
