import Link from "next/link";
import type { NextPage } from "next";

import Layout from "../components/common/layout";


const Project23: NextPage = () => {
    return (
        <>
            <div className="bg-black text-white pt-20 lg:pl-20">
                <div className="mb-20">
                    <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">PROJECTS</div>
                    <div className="capitalize font-signika font-medium tracking-tight text-8xl">2023</div>
                    <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
                        <span className="text-mcgill-red"><Link href='/'>HOME </Link></span>
                         / PROJECTS / 2023
                    </div>
                </div>
            </div>
                <div className="text-8xl font-signika text-center mb-20 hover:underline"><a href='https://2023.igem.wiki/mcgill/'>PROTEUS</a></div>
        </>
    )
};

export default Project23;

// export async function getStaticProps() {}

export async function getStaticProps() {
    return {
      props: {},
    };
  }