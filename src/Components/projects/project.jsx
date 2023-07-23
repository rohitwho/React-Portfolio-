import React from 'react'

   import { Card, Col, Row, Button, Text } from "@nextui-org/react";
  //  import Rentix from "../assets/Rentix.png"

export default function project() {
 
  return (

    <div> <h2 className='Projects-Heading'>Projects</h2> 
   <div id = "Projects" className='Project-Main'>


  <Card css={{ w: "55%", h: "350px",margin:"1rem" ,display:"flex",flexWrap:"wrap"}}>
   
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="src/assets/Rentix.jpeg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
       New
          </Text>
          <Text color="#000" size={12}>
       Rentix
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" ><a href="https://rentixx-64a3fa155998.herokuapp.com/"  >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              
              >
                View Live!
              </Text>
            </a>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>





















  <Card css={{ w: "55%", h: "350px",margin:"1rem" ,display:"flex",flexWrap:"wrap"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
   
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="src/assets/FitZone.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
          New
          </Text>
          <Text color="#000" size={12}>
           FitZone
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
          <Button flat auto rounded color="secondary" ><a href="https://rohitwho.github.io/Fit-Zone/"  >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              
              >
                View Live!
              </Text>
            </a>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>








  <Card css={{ w: "55%", h: "350px",margin:"1rem" ,display:"flex",flexWrap:"wrap"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-6.jpeg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Available soon.
          </Text>
          <Text color="#000" size={12}>
            Portfolio
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
          <Button flat auto rounded color="secondary" ><a href="https://rentixx-64a3fa155998.herokuapp.com/"  >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              
              >
                View Live!
              </Text>
            </a>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>






  <Card css={{ w: "55%", h: "350px",margin:"1rem" }}>
   
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="src/assets/Tech Savvy.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Available 
          </Text>
          <Text color="#000" size={12}>
       Tech Savvy
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
          <Button flat auto rounded color="secondary" ><a href="https://tech-savvy-d98bc01a66cd.herokuapp.com/"  >
              <Text
                css={{ color: "inherit" }}
                size={12}
           
                weight="bold"
                transform="uppercase"
              
              >
                View Live!
              </Text>
            </a>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>


   </div>
   </div>
  )
}
