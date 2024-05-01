import Link from "next/link";
import type { NextPage } from "next";
import { SocialIcon } from "react-social-icons";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import Layout from "../components/common/layout";

const artcontest: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black text-white pt-20  tracking-tight">
        <div className="mb-10 pl-[10rem]">
          <div className="py-10 capitalize font-signika font-light text-3xl">
            INITIATIVES
          </div>
          <div className="capitalize font-signika font-medium text-8xl">
            SYNBIOSIS <br/>ART CONTEST
          </div>
          <div className="py-10 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">HOME </span>/ INITIATIVES / SYNBIOSIS ART CONTEST
          </div>
        </div>
        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-6xl">
            Run the chance of having your art featured at an art gallery
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-2xl">
            Brought to you by McGill iGEM, this competition puts your art to the test and enables you to explore it through the lens of synthetic biology.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
          The exhibition will take place at the <a href="https://www.projetcasa.org/" className="text-blue-500 hover:underline">Projet Casa Art Gallery</a> on the 18th of July 2024. 
          </div>
        </div>

        <div className="py-10 pl-40">
          <img src="img/Synbiosis Art competition - Projet Casa display.svg" alt="Image of the Art Gallery" style={{width: '90%'}} />
        </div>
  




        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            Description
          </div>

        <div className="w-1/2 mt-14 font-mono font-regular text-l">
            {/* WHO IS THIS COMPETITION FOR */}
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">Who is this competition for?</b>
              <br/>
              For anyone who has a kick for biology and biotech in general. But it applies just as well to anyone who is up to participate and take part of an exciting project that merges art with synthetic biology.
            </div>
            <br /><br />

            {/* WHAT IS SYNTHETIC BIO */}
            <div>
            <b className="w-1/2 mt-14 font-mono font-regular text-xl">What is synthetic biology (or synbio)?</b>
            <br />
            Synthetic biology is a new field of research with a central focus on how DNA can be engineered as a tool to create new systems that have a purpose, whether it be from DNA origami biosensors to smart bacteria that can reach tumor sites and release therapeutics. The limit is your imagination...
            <br /><br />
            To get a better grasp of what synbio is, check out <a href="https://www.youtube.com/watch?v=zggU1KCgc7A" className="text-blue-500 hover:underline">this great explanatory video</a> by Ginkgo Bioworks, a world leader in the field.
            </div>
            <br /><br />

            {/* WHATS THE THEME */}
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">The Theme</b>
              <br /><br />
              <em><b>Synbio, Synbiosis - With engineering and the art of biology, at the micro-scale</b></ em>
              <br /><br />
              The idea is to present synbio as a way to harness nature’s amazing potential as a framework for finding new solutions to help benefit society as a whole. This involves a synergy between creativity, knowledge of current tools, and goodwill, to make it work. Just as science and art are both powered by creativity and curiosity, we hope that you will be inspired by science, and in turn, inspire future scientists.
            </div>
            <br /><br />
            
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">Need inspiration?</b>
              <br/>
              Check out <a href="/files/IGEM McGill Art Contest - Inspiration Material.pdf" className="text-blue-500 hover:underline"> this awesome PDF</a> of reference material we put together.
            </div>
        
            <div className="p-4 mt-14 bg-white text-black">
              <b className="w-1/2 mt-14 font-mono font-regular text-2xl">Rules</b>
              <ul className="list-disc ml-4">
                <li>Anything you can paint on a canvas or digitally will be accepted.</li>
                <li>You can also explore other mediums (such as using clay).</li>
                <li>Make sure you follow the theme, and the message we try to convey with it.</li>
                <li>The work you submit must be your own - we reserve the right to disqualify your artwork if it has copied, or plagiarized any other work without explicit permission.</li>
              </ul>
            </div>
            <br /><br />

            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">How to Submit</b>
              <br/>
              When you’re done and feel ready to make a submission, <a href="example.com" className="text-blue-500 hover:underline"> please fill out this form</a>. Send out a file with your work and our judges will do their best to evaluate you work. If the photo is too difficult to assess, a resubmission may be required.
            </div>
            <br /><br />
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">How many winners will there be?</b>
              <br/>
              <b>We will select a maximum of three winners. All winners will have their art featured at the gallery. </b> <br />The artwork in first place may also be painted side by side by a robotic arm from the <a href="https://www.acrylicrobotics.ca/" className="text-blue-500 hover:underline">McGill startup Acrylic Robotics </a> (though, this still has to be confirmed, and will also be at the discretion of the artist). <br /> Final decisions will be announced publicly on this website. All participants will be notified with an e-mail (the one you provide with your submission), and winners will be contacted with further details to confirm their artwork can be used for exhibition.
            </div>
      </div>

          <div className="bg-mcgill-red p-4 w-1/2 mt-14 font-mono font-regular text-l">
          <b className="w-1/2 mt-14 font-mono font-regular text-xl">Key Dates</b> 
          <b className="w-1/2 mt-14 font-mono font-regular text-2l">
            <br />
            Submission deadline: June 28 2024
            <br />
            Tentative date of final decisions: July 5 2024
            <br />
            Exhibition: July 18-21 2024
            </b>
          </div>

          <div className="w-1/2 mt-14 font-mono font-regular text-l">
          <b className="w-1/2 mt-14 font-mono font-regular text-xl">Questions?</b> 
            <br />
            If you have any questions or want some pointers on how you can pursue your work, do not hesitate to <span className="text-blue-500 hover:underline hover:cursor-pointer"><Link href="/contact">Contact us</Link></span> or to send us an email at igem@mcgill.ca directly.
          </div>
          </div>
      
      
      
          <div className="flex justify-center items-center">
            <div className="bg-black flex mt-14 justify-between font-mono font-regular text-xl items-center">

              <div className="flex items-center">


              <div className="flex flex-col mr-2">
                  <div className="hover:scale-125 loadLeft">
                    {<SocialIcon
                      url="https://www.instagram.com/igem.mcgill/"
                      fgColor="white"
                      bgColor="transparent"
                    />}
                  </div>
                  <div className="hover:scale-125 loadLeft mr-2">
                    {<SocialIcon
                      url="https://www.instagram.com/projet_casa/"
                      fgColor="white"
                      bgColor="transparent"
                    />}
                  </div>

                </div>

                <img src="/img/Mcgill IGEM logo.svg" alt="McGill iGEM Logo" className="h-20 mr-3" />
                <div className="text-white text-4xl">X</div>
                <img src="/img/Projet Casa Logo.svg" alt="Project Casa Logo" className="h-20 ml-6" />



                <div className="flex flex-col">
                  <div className="hover:scale-125 loadLeft ml-3">
                    {<SocialIcon
                      url="https://www.instagram.com/igem.mcgill/"
                      fgColor="white"
                      bgColor="transparent"
                    />}
                  </div>
                  <div className="hover:scale-125 loadLeft ml-3">
                    {<SocialIcon
                      url="https://www.instagram.com/projet_casa/"
                      fgColor="white"
                      bgColor="transparent"
                    />}
                  </div>

                </div>

              </div>

            </div>

          </div>


      <br /><br />
      </div>





    </>
  );
};

export default artcontest;

// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}
