import Wrapper from "../sections/Wrapper";

const About = () => {
  return <div>About</div>;
};

// Give the wrapped component a name
const WrappedAbout = Wrapper(About);

export default WrappedAbout;
