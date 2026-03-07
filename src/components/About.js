import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>ths is about page</h2>
      {/* <User name={"Yash Gupta"} location={"Faridabad"} /> */}
      <UserClass name={"Yash Gupta Class"} location={"Faridabad Class"} />
    </div>
  );
};

export default About;
