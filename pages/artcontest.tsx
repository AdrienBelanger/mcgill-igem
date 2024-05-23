import Link from "next/link";
import type { NextPage } from "next";
import { SocialIcon } from "react-social-icons";
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
          <div className="w-1/2 font-signika font-regular text-xl text-blue-500 hover:underline">
          
        <Link href="/artcontest_fr">Voir la page en français</Link>
        <br /><br />
          </div>
          <div className="py-10 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">HOME </span>/ INITIATIVES / SYNBIOSIS ART CONTEST
          </div>
        </div>
        <div className="py-10 pl-40">
        
          <div className="w-1/2 font-signika font-regular text-6xl">
            Have the chance for your art come to life at an art gallery.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-2xl">
          Brought to you by McGill iGEM, express your creativity through the lens of synthetic biology.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
          The exhibition will take place at the <a href="https://www.projetcasa.org/" className="text-blue-500 hover:underline">Projet Casa Art Gallery</a> in mid-July 2024. 
          </div>
        </div>

        <div className="py-10 pl-40">
          <img src="img/Synbiosis Art competition - Projet Casa display.svg" alt="Image of the Art Gallery" style={{width: '90%'}} />
        </div>
  




        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            Description
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
            The Synbiosis Art Contest invites you to explore the fusion of art and science through your creative lens. This unique competition seeks to blend the imaginative realms of synthetic biology and artistic expression, showcasing the potential of biotechnology as an inspiration for art. Set against the vibrant backdrop of the Projet Casa Art Gallery, the exhibition is scheduled for mid-July 2024, offering artists a platform to present their work to an appreciative audience. Whether you`re a seasoned artist or a curious novice, this contest is an opportunity to challenge your creativity and inspire the next generation of scientists. Your submission should be a reflection of your originality and of your interpretation of synthetic biology’s expansive possibilities—from complex bioengineered systems to novel molecular structures. Selected works will be presented at the exhibit and artists will earn 50% of the proceeds from any sales made from their work. Dive into the intersection of life and art, and let your vision come to life at an inspiring exhibition!
            </div>
            

        <div className="w-1/2 mt-14 font-mono font-regular text-l">
            {/* WHO IS THIS COMPETITION FOR */}
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">Who is this competition for?</b>
              <br/>
              All creative minds.
            </div>
            <br /><br />

            {/* WHAT IS SYNTHETIC BIO */}
            <div>
            <b className="w-1/2 mt-14 font-mono font-regular text-xl">What is synthetic biology (or synbio)?</b>
            <br />
            Synthetic biology is a field of research focusing on how biological systems can be engineered for novel uses, from DNA origami biosensors to “smart” bacteria that can detect and treat tumours. Your imagination is the limit!
            </div>
            <br /><br />

            {/* WHATS THE THEME */}
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">The Theme</b>
              <br /><br />
              <em><b className="text-l">Synbiosis: Interwoven Inspiration</b></ em>
              <br /><br />
              Just as science and art are both powered by creativity and curiosity, we hope that your art will be inspired by science, and in turn, inspire future scientists.
            </div>
            
            
        
            <div className="p-4 mt-14 bg-white text-black">
              <b className="w-1/2 mt-14 font-mono font-regular text-2xl">Rules & Terms</b>
              <ul className="list-disc ml-4">
                <li>Please submit your original artwork in any medium by June 30th.</li>
                <li>Outstanding entries will be showcased at Projet Casa, and artists will receive 50% of the proceeds from the sale of their work.</li>
                <li>If the artwork is a painting, the canvas size cannot exceed 40” x 40”</li>
                <li>All submissions must be the entrant`s own creation. We reserve the right to disqualify any artwork found to be plagiarized or created without explicit permission.</li>
                <li>Submissions will be selected by a Jury designated by McGill iGEM</li>
          
              </ul>
            </div>
            <br /><br />
      </div>

          <div className="bg-mcgill-red p-4 w-1/2 mt-14 font-mono font-regular text-l">
          <b className="w-1/2 mt-14 font-mono font-regular text-xl">Key Dates</b> 
          <b className="w-1/2 mt-14 font-mono font-regular text-2l">
            <br />
            Submission deadline: June 30, 2024
            <br />
            Tentative date of final decisions: early July 2024
            <br />
            Exhibition: mid-July 2024
            </b>
          </div>
          <br /><br />

          <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">How to Submit</b>
              <br/>
              <a href="https://forms.gle/MmGxkBzZyZVjsZGSA" className="text-blue-500 hover:underline"> Please fill out this form. </a>
            </div>



          <div className="w-1/2 mt-14 font-mono font-regular text-l">
          <b className="w-1/2 mt-14 font-mono font-regular text-xl">Questions?</b> 
            <br />
            Do not hesitate to <span className="text-blue-500 hover:underline hover:cursor-pointer"><Link href="/contact">contact us</Link></span> at igem@mcgilleus.ca or on @igem.mcgill on Instagram.
          </div>

          <br /><br />
            
            <div>
              <b className="w-1/2 mt-14 font-mono font-regular text-xl">Want to learn more about synthetic biology?</b>
              <br/>
              Start by checking out <a href="files/IGEM McGill Art Contest - Inspiration Material.pdf" className="text-blue-500 hover:underline"> this awesome PDF</a> of reference material we put together. Then, explore our <a href="https://in-vitro-conference.webflow.io/" className="text-blue-500 hover:underline"> other educational initiatives</a>.
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
                      url="https://twitter.com/igemmcgill"
                      fgColor="white"
                      bgColor="transparent"
                    />}
                  </div>

                </div>

                <img src="img/Mcgill IGEM logo.svg" alt="McGill iGEM Logo" className="h-20 mr-3" />
                <div className="text-white text-4xl">X</div>
                <img src="img/Projet Casa Logo.svg" alt="Project Casa Logo" className="h-20 ml-6" />



                <div className="flex flex-col">
                  <div className="hover:scale-125 loadLeft ml-3">
                    {<SocialIcon
                      url="https://www.instagram.com/projet_casa/"
                      fgColor="white"
                      bgColor="transparent"
                    />}
                  </div>
                  <div className="hover:scale-125 loadLeft ml-3">
                    {<SocialIcon
                      url="https://www.facebook.com/ProjetCasa.art/"
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
