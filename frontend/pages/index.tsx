import type { NextPage } from "next";
import InjectHead from "../components/common/InjectHead";

const Home: NextPage = () => {
  return (
    <>
      <InjectHead />
      <h1>Hello world</h1>
    </>
  );
};

export default Home;
