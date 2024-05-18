import styles from "../../styles/Navbar.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {
  pageLoading: boolean;
}

const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (props.pageLoading) {
      setNavOpen(false);
    }
  }, [props.pageLoading]);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full z-[1000] h-[4.5rem] bg-transparent">
      <div className="hover:cursor-pointer fixed float-left ml-4 mt-4 h-10 z-[2000]">
        <Link href="/">
          <img
            src={
              navOpen
                ? "img/mcgill-igem-logo.png"
                : "img/mcgill-igem-logo-without-text.png"
            }
            alt="McGill IGEM Logo"
            className={`h-full ${styles.logo}`}
          />
        </Link>
      </div>

      <div className={navOpen ? styles.bgoopen : ""}></div>
      <div className={!navOpen ? styles.bg : ""}></div>

      <div className={styles.burgerAlign}>
        <div
          className={`${styles.simplyburger} ${
            navOpen ? styles.simplyburgeropen : ""
          }`}
          onClick={handleNavClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {navOpen && (
        <div className="fixed w-full h-full text-white font-signika font-medium">
          <div className="bothalign">
            <div className={styles.navanim}>
              <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full lg:gap-x-55 lg:gap-y-10 gap-5">
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">
                    About Us
                  </h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/about">Our Team</Link>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/mission">Our Mission</Link>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/join">Join Us</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">
                    Partners
                  </h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/sponsors">Sponsors</Link>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/partner">Partner With Us</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">
                    Projects
                  </h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/current">Current</Link>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/2023">2023</Link>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/2022">2022</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">
                    Initiatives
                  </h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer">
                      <a href="https://open.spotify.com/show/566xfBOfyIhNnNVNsjVHjz?si=8c4f83dca49343cb&nd=1">
                        STEMcast
                      </a>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <a href="https://in-vitro-conference.webflow.io/">
                        Conference
                      </a>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <a href="https://www.youtube.com/channel/UCwqaOp6Mkj4Ekhd9QRchd6w">
                        Synbio Collective
                      </a>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="/artcontest">
                        Synbiosis Art Competition
                      </Link>
                    </li>
                    <li className="hover:underline hover:cursor-pointer">
                      <Link href="https://mcgilligem.substack.com/">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1 hover:underline hover:cursor-pointer">
                    <a href="https://mcgilligem.substack.com/">NEWS</a>
                  </h1>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1 hover:underline hover:cursor-pointer">
                    <Link href="/contact">Contact Us</Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
