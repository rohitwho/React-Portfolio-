import React from "react";
import fitzone from '../../assets/FitZone.png'
import rentix from "../../assets/Rentix.jpeg"
import bookSearch from "../../assets/Book-search/jpeg"
import techSavvy from "../../assets/TechSavvy.png"


import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function project() {
  return (
    <div>
   
      <h2 className="About-Me">Projects</h2>
      <div id="Projects" className="Project-Main">
        <section className=" Primary-Project">
          <div className="card">
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5 m-unit-xl"
            >
              <Image
                removeWrapper
                alt="Fit Zone"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={fitzone}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-white  underline  text-large ">FitZone.</p>
                </div>
                <Button color="warning" variant="ghost">
                  <a
                    target="_blank"
                    href="https://rohitwho.github.io/Fit-Zone/"
                  >
                    View Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="card">
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={rentix}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-white  underline  text-large ">Rentix</p>
                </div>
                <Button color="warning" variant="ghost">
                  <a
                    target="_blank"
                    href="https://rentixx-64a3fa155998.herokuapp.com/"
                  >
                    View Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="card">
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={bookSearch}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-white  underline  text-large ">
                    Book Search.
                  </p>
                </div>
                <Button color="warning" variant="ghost">
                  <a target="_blank" href="https://book-search-eng-a5e7ebcdafff.herokuapp.com/">
                    View Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="card">
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5   "
            >
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={techSavvy}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-white  underline  text-large ">
                    Tech Savvy
                  </p>
                </div>
                <Button color="warning" variant="ghost">
                  <a
                    target="_blank"
                    href="https://tech-savvy-d98bc01a66cd.herokuapp.com/"
                  >
                    View Live
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
