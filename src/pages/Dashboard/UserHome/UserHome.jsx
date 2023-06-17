import { Fade, Slide } from "react-awesome-reveal";

const UserHome = () => {
  return (
    <div>
      <Slide>
        <h2 className="text-3xl text-black p-10 mb-1">
          !!! WelCome to our Makeup School !!!
        </h2>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
        A good environment to learn about your Good looks...
      </Fade>
    </div>
  );
};

export default UserHome;
