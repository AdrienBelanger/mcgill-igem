import Link from "next/link";
import type { NextPage } from "next";
import styles from '../../styles/Navbar.module.scss';
import Layout from "../components/common/layout";


const Project22: NextPage = () => {
    return (
        <>
            <div className="bg-black text-white pt-20 pl-20">
                <div className="mb-20">
                    <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">PROJECTS</div>
                    <div className="capitalize font-signika font-medium tracking-tight text-8xl">2022</div>
                    <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
                        <span className="text-mcgill-red"><Link href='/'>HOME </Link></span>
                         / PROJECTS / 2022
                    </div>
                </div>
            </div>
                <div className="text-8xl font-signika text-center mb-20 hover:underline"><a href='https://2022.igem.wiki/mcgill/'>CoBiota</a></div>
        </>
    )
};

export default Project22;

// export async function getStaticProps() {}

export async function getStaticProps() {
    return {
      props: {},
    };
  }