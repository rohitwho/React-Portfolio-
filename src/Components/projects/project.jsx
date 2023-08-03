import React from 'react'

import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default function project() {
 
  return (

    <div> <h2 className='Projects-Heading'>Projects</h2> 
   <div id = "Projects" className='Project-Main'>
<section className=' flex justify-center flex-wrap  m-36 '>
  
     <div className='card' >
       <Card  isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 m-unit-xl">
  
          <Image
            removeWrapper
            alt="Fit Zone"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="src/assets/FitZone.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white ">FitZone.</p>
  
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="large" >
              <a  href = "https://rohitwho.github.io/Fit-Zone/">View Live</a>
            </Button>
          </CardFooter>
        </Card>
     </div>
  
  
  
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
  
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="src/assets/Rentix.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white">Rentix</p>
  
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="large">
           <a href="https://rentixx-64a3fa155998.herokuapp.com/">View Live</a>
          </Button>
        </CardFooter>
      </Card>
  
  
  
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
  
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="src/assets/FitZone.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white">Book Search.</p>
  
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="large">
           <a href="">View Live</a>
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5   ">
  
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="src/assets/Tech Savvy.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white">Tech Savvy</p>
  
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="large">
           <a href="https://tech-savvy-d98bc01a66cd.herokuapp.com/">View Live</a>
          </Button>
        </CardFooter>
      </Card>
</section>
  {/* <Card css={{ w: "55%", h: "350px",margin:"1rem" ,display:"flex",flexWrap:"wrap"}}>
   
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
                <a href="">View Live</a>!
              </Text>
            </a>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
 */}




















  {/* <Card css={{ w: "55%", h: "350px",margin:"1rem" ,display:"flex",flexWrap:"wrap"}}>
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
  </Card> */}


   </div>
   </div>
  )
}
