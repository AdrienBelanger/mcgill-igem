import Link from "next/link";
import type { NextPage } from "next";
import { SocialIcon } from "react-social-icons";
import Layout from "../components/common/layout";

const artcontest: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black text-white pt-20 tracking-tight">
        <div className="mb-10 px-6 md:px-20">
          <div className="py-10 capitalize font-signika font-light text-3xl">
            INITIATIVES
          </div>
          <div className="capitalize font-signika font-medium text-5xl md:text-8xl">
            SYNBIOSIS <br /> ART CONTEST
          </div>
          <div className="py-10 capitalize font-mono font-bold text-sm md:text-base">
            <span className="text-mcgill-red">HOME </span>/ INITIATIVES / SYNBIOSIS ART CONTEST
          </div>
        </div>
        <div className="py-10 px-6 md:px-20">
          <div className="w-full md:w-1/2 font-signika font-regular text-2xl md:text-6xl">
            Have the chance for your art to come to life at an art gallery.
          </div>
          <div className="w-full md:w-1/2 mt-14 font-mono font-regular text-lg md:text-2xl">
            Brought to you by McGill iGEM, express your creativity through the lens of synthetic biology.
          </div>
          <div className="w-full md:w-1/2 mt-14 font-mono font-regular text-base md:text-xl">
            The exhibition will take place at the <a href="https://www.projetcasa.org/" className="text-blue-500 hover:underline">Projet Casa Art Gallery</a> in mid-July 2024.
          </div>
        </div>

        <div className="py-10 px-6 md:px-20">
          <img src="img/Synbiosis Art competition - Projet Casa display.svg" alt="Image of the Art Gallery" style={{ width: '100%', maxWidth: '90%' }} />
        </div>

        <div className="py-10 px-6 md:px-20">
          <div className="w-full md:w-1/2 font-signika font-regular text-3xl md:text-5xl">
            Description
          </div>
          <div className="w-full md:w-1/2 mt-14 font-mono font-regular text-base md:text-xl">
            The Synbiosis Art Contest invites you to explore the fusion of art and science through your creative lens. This unique competition seeks to blend the imaginative realms of synthetic biology and artistic expression, showcasing the potential of biotechnology as an inspiration for art. Set against the vibrant backdrop of the Projet Casa Art Gallery, the exhibition is scheduled for mid-July 2024, offering artists a platform to present their work to an appreciative audience. Whether you are a seasoned artist or a curious novice, this contest is an opportunity to challenge your creativity and inspire the next generation of scientists. Your submission should be a reflection of your originality and of your interpretation of synthetic biology’s expansive possibilities—from complex bioengineered systems to novel molecular structures. Selected works will be presented at the exhibit and artists will earn 50% of the proceeds from any sales made from their work. Dive into the intersection of life and art, and let your vision come to life at an inspiring exhibition!
          </div>

          <div className="w-full md:w-1/2 mt-14 font-mono font-regular text-base md:text-lg">
            <div>
              <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">Who is this competition for?</b>
              <br />
              All creative minds.
            </div>
            <br /><br />

            <div>
              <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">What is synthetic biology (or synbio)?</b>
              <br />
              Synthetic biology is a field of research focusing on how biological systems can be engineered for novel uses, from DNA origami biosensors to “smart” bacteria that can detect and treat tumours. Your imagination is the limit!
            </div>
            <br /><br />

            <div>
              <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">The Theme</b>
              <br /><br />
              <em><b className="text-lg">Synbiosis: Interwoven Inspiration</b></em>
              <br /><br />
              Just as science and art are both powered by creativity and curiosity, we hope that your art will be inspired by science, and in turn, inspire future scientists.
            </div>

            <div className="p-4 mt-14 bg-white text-black">
              <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-2xl">Rules & Terms</b>
              <ul className="list-disc ml-4">
                <li>Please submit your original artwork in any medium by June 30th.</li>
                <li>Outstanding entries will be showcased at Projet Casa, and artists will receive 50% of the proceeds from the sale of their work.</li>
                <li>All submissions must be the entrant`s own creation. We reserve the right to disqualify any artwork found to be plagiarized or created without explicit permission.</li>
              </ul>
            </div>
            <br /><br />

            <div>
              <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">How many winners will there be?</b>
              <br />
              <b>We will select a maximum of three winners. All winners will have their art featured at the gallery.</b> <br /> The artwork in first place may also be painted side by side by a robotic arm from the <a href="https://www.acrylicrobotics.ca/" className="text-blue-500 hover:underline">McGill startup Acrylic Robotics </a> (though, this still has to be confirmed, and will also be at the discretion of the artist). <br /> Final decisions will be announced publicly on this website. All participants will be notified with an e-mail (the one you provide with your submission), and winners will be contacted with further details to confirm their artwork can be used for exhibition.
            </div>
          </div>

          <div className="bg-mcgill-red p-4 w-full md:w-1/2 mt-14 font-mono font-regular text-base md:text-lg">
            <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">Key Dates</b>
            <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-lg">
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
            <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">How to Submit</b>
            <br />
            <a href="https://forms.gle/MmGxkBzZyZVjsZGSA" className="text-blue-500 hover:underline">Please fill out this form.</a>
          </div>

          <div className="w-full md:w-1/2 mt-14 font-mono font-regular text-base md:text-lg">
            <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">Questions?</b>
            <br />
            Do not hesitate to <span className="text-blue-500 hover:underline hover:cursor-pointer"><Link href="/contact">contact us</Link></span> at igem@mcgilleus.ca or on @igem.mcgill on Instagram.
          </div>

          <br /><br />

          <div>
            <b className="w-full md:w-1/2 mt-14 font-mono font-regular text-xl">Want to learn more about synthetic biology?</b>
            <br />
            Start by checking out <a href="files/IGEM McGill Art Contest - Inspiration Material.pdf" className="text-blue-500 hover:underline">this awesome PDF</a> of reference material we put together. Then, explore our <a href="https://in-vitro-conference.webflow.io/" className="text-blue-500 hover:underline">other educational initiatives</a>.
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mt-14 font-mono font-regular text-xl text-white">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="mr-2">McGill iGEM:</div>
              <SocialIcon url="https://www.instagram.com/igem.mcgill/" fgColor="white" bgColor="transparent" className="mr-2" />
              <SocialIcon url="https://twitter.com/igemmcgill" fgColor="white" bgColor="transparent" />
            </div>
            <img src="img/Mcgill IGEM logo.svg" alt="McGill iGEM Logo" className="h-20" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <div className="mr-2">Projet Casa:</div>
              <SocialIcon url="https://www.instagram.com/projet_casa/" fgColor="white" bgColor="transparent" className="mr-2" />
              <SocialIcon url="https://www.facebook.com/ProjetCasa.art/" fgColor="white" bgColor="transparent" />
            </div>
            <img src="img/Projet Casa Logo.svg" alt="Projet Casa Logo" className="h-20" />
          </div>
        </div>

      </div>
    </>
  );
};

export default artcontest;

export async function getStaticProps() {
  return {
    props: {},
  };
}
