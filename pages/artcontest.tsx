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
            SYNBIOSIS <br></br>ART COMPETITION
          </div>
          <div className="py-10 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">HOME </span>/ INITIATIVES / SYNBIOSIS ART COMPETITION
          </div>
        </div>
        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            Brought to you by McGill iGEM, this competition puts your art to the test and enables you to explore it through the lens of synthetic biology.
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-xl">
            At the Projet Casa Art Gallery, join us for an exciting project that merges art with synthetic biology.
          </div>
        </div>

        <div className="py-10 pl-40">
          <div className="w-1/2 font-signika font-regular text-5xl">
            Synbio, Synbiosis - A new stroke under the microscope
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-l">
            The idea behind the theme is to show synbio as a way to harness nature’s amazing potential as a framework for finding new solutions to help benefit society as a whole. This involves a synergy between creativity, knowledge of current tools, and goodwill, to make it work.
          </div>
        </div>

        <div className="py-10 pl-40 bg-white text-black relative">

          <div className="w-1/2 font-signika font-regular text-5xl">
            Rules & Submission
          </div>
          <div className="w-1/2 mt-14 font-mono font-regular text-s">
            <p><strong>Who is this competition for? </strong><br />
              For anyone who has a kick for biology and biotech in general. But it applies just as well to anyone who is up to participate and take part of an exciting project that merges art with synthetic biology.</p>
            <p><strong><br />What is synthetic biology (or synbio)? </strong><br />
              Synthetic biology is a new field of research with a central focus on how DNA can be engineered as a tool to create new systems that have a purpose, whether it be from DNA origami biosensors to smart bacteria that can reach tumor sites and release therapeutics. The limit is your imagination...</p>
            <p><strong><br />Need inspiration? </strong><br />
              There are a lot of online resources where you can learn some more about really cool things going on with synbio. But don’t worry! If you’re not too familiar with some concepts in biology or in biotech, here’s a quick guide with resources to easily grasp the essence of synbio.</p>
            <p>Anything you can paint on a canvas or digitally will be accepted. You can also explore other mediums (such as using clay), but don’t make it too big! Make sure you follow the theme, and the message we try to convey with it. Other than that, you have full freedom over what you want to express for us.</p>
            <p><strong><br />How to submit? </strong><br />
              When you’re done and feel ready to make a submission, please fill out this form. Send out the best photo you can make of you work and our judges will do their best to evaluate you work. If the photo is too difficult to assess, a resubmission may be required.</p>
            <p><br /><strong>How many people can win? </strong><br />
              We select a maximum of three winners. All winners will have their art featured at the gallery. The artwork in first place may also be painted side by side by a robotic arm from the McGill startup Acrylic Robotics (though, this is still TBD, and will also be at the discretion of the artist).</p>
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
