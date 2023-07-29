
import React from "react";
import CircularProgressWithLabel from "../Components/progress"
// import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
// import FormInput from "../reusable/form";
// import { Mail } from "./Mail";
// import { Password } from "./Password";


export default function About(){

  // const [visible, setVisible] = React.useState(false);
  // const handler = () => setVisible(true);
  // const closeHandler = () => {
  //   setVisible(false);
 
  // };
    return (<div  id ="About"className="About-Container"> <h1>About Me</h1>
    <p>

Welcome! I'm<span className="Hero-Writing"> Rohit</span>, a passionate web development wizard. With HTML, CSS, and JavaScript as my spells, I craft captivating and responsive user interfaces. My design artistry ensures stunning visuals and delightful user experiences. Fearless in the face of challenges, I conquer bugs and optimize projects for blazing success. Let's collaborate and weave magic together. Explore my portfolio and unleash the digital wonders!</p>


<section className="Skills-Main">
  <div className="skills-tech">
    <ul>
      <li>HTML<CircularProgressWithLabel value = "30"></CircularProgressWithLabel></li>
      <li>CSS</li>
      <li>Javascript</li>
  
    </ul>
  </div>
  <div className="skills-framework">
    <ul>
      <li>J-Query</li>
      <li>Node.js</li>
      <li>Npm</li>
      <li>React</li>
  
    </ul>
  </div>
  <div className="skills-db">
    <ul>
      <li>My Sql</li>
      <li>Mongo-Db</li>
      <li>Mongoose</li>
      <li>Sequelize</li>
    </ul>
  </div>
</section>




    {/* <div>
      <Button auto color="Primary" shadow onPress={handler}>
      Hire Me
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<FormInput fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<FormInput fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div> */}



    
    
    
    
    
    
    
    </div>)
}