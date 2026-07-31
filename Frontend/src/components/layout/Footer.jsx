import Link from "next/link";
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <span className="col-span-11 grid place-items-center md:justify-start items-center md:col-span-6">
        <Link href="/">
          <Image
            className="w-12 h-12 mr-2"
            src="/images/School.png"
            alt="Logo"
            width={48}
            height={48}
          />
        </Link>
        <Link href="/">
          <div className="text-xl font-bold text-white">EG School</div>
        </Link>
      </span>

      <nav>
        <h6 className="footer-title">Contact Us</h6>
        <p className="flex items-center link link-hover">
          <PiPhone /> +977-01-427555
        </p>

        <p className="flex items-center link link-hover">
          <MdEmail /> EgSchool@org.npp
        </p>

        <p className="flex items-center link link-hover">
          <BiLocationPlus /> Chhauni-13, Kathmandu, Npl
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">
          <Link href="/about">About Us</Link>
        </h6>

        <Link href="/faculty" className="link link-hover">
          Faculty
        </Link>

        <Link href="/facilities" className="link link-hover">
          Facility
        </Link>

        <Link href="/notice" className="link link-hover">
          Notice Board
        </Link>

        <Link href="/news" className="link link-hover">
          News & Events
        </Link>

        <Link href="/gallery" className="link link-hover">
          Gallery
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
