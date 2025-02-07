import Countdown from "../Components/Countdown";
import Dropdown from "../Components/Dropdown";
import Timeline from "../Components/Timeline";

// import Stats from '../Components/Stats';
import Header from "../Components/Header";
import Portfolio from "../Components/Portfolio";
import Phone from "../Components/Phone and From/Phone";

import { useRef } from "react";
import Form from "../Components/Phone and From/Form";

const Home = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    console.log("formRef:", formRef.current);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header></Header>
      <Phone scrollToForm={scrollToForm}></Phone>
      {/* <Stats></Stats> */}
      <Portfolio></Portfolio>
      <Countdown></Countdown>

      <Dropdown></Dropdown>
      <Timeline></Timeline>
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  );
};

export default Home;
