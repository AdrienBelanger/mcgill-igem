import Link from "next/link";
import type { NextPage } from "next";
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
            SYNBIOSIS <br></br>ART CONTEST
          </div>
          <div className="py-10 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">HOME </span>/ INITIATIVES / SYNBIOSIS ART CONTEST
          </div>
        </div>
        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            Run the chance of having your art featured at an art gallery
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
            Brought to you by McGill iGEM, this competition puts your art to the test and enables you to explore it through the lens of synthetic biology.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
            <a href="https://www.projetcasa.org/" className="text-blue-500 hover:underline">At the Projet Casa Art Gallery</a>
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
            <span className="text-blue-500">Exhibition on July 18-21 2024</span>
          </div>
        </div>

        <div className="py-10 pl-40">
          <Image src="/wide-image.jpg" alt="Wide Image" width={1200} height={800} />
        </div>

        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            Description
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-l">
            For who is this competition for?
            <br />
            For anyone who has a kick for biology and biotech in general. But it applies just as well to anyone who is up to participate and take part of an exciting project that merges art with synthetic biology.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-l">
          <div className="w-1/2 mt-14 font-mono font-regular text-l">
  What is synthetic biology (or synbio)?
  <br />
  Synthetic biology is a new field of research with a central focus on how DNA can be engineered as a tool to create new systems that have a purpose, whether it be from DNA origami biosensors to smart bacteria that can reach tumor sites and release therapeutics. The limit is your imagination...
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  To get a better grasp of what synbio is, feel free to check out this explanatory video by Ginkgo Bioworks, a world leader in the field.
  <br />
  <a href="https://www.youtube.com/watch?v=zggU1KCgc7A" className="text-blue-500 hover:underline">https://www.youtube.com/watch?v=zggU1KCgc7A</a>
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  Our theme
  <br />
  Synbio, Synbiosis - With engineering and the art of biology, at the micro-scale
  <br />
  The idea behind is to show synbio as a way to harness nature’s amazing potential as a framework for finding new solutions to help benefit society as a whole. This involves a synergy between creativity, knowledge of current tools, and goodwill, to make it work. Just as science and art are both powered by creativity and curiosity, we hope that you will be inspired by science, and in turn, inspire future scientists.
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  Need inspiration?
  <br />
  ...
  //Rest of your inspiration text here
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  Rules
  <br />
  Anything you can paint on a canvas or digitally will be accepted. You can also explore other mediums (such as using clay). Make sure you follow the theme, and the message we try to convey with it. The work you submit must be your own - we reserve the right to disqualify your artwork if it has copied, or plagiarized any other work without explicit permission.
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  How to submit?
  <br />
  ...
  // Rest of your submission instructions text here
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  How many people can win?
  <br />
  ...
  // Rest of your winning criteria text here
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  Key Dates
  <br />
  Submission deadline - June 28 2024
  <br />
  Tentative date of final decisions - July 5 2024
  <br />
  Exhibition - July 18-21 2024
</div>

<div className="w-1/2 mt-14 font-mono font-regular text-l">
  Questions?
  <br />
  If you have any questions or want some pointers on how you can pursue your work, do not hesitate to contact us to our email at igem@mcgill.ca
</div>

          </div>
        </div>
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
