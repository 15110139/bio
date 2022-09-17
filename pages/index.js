import Image from "next/image";
import icon from "../public/user-icon.png";
import fbIcon from "../public/icons-facebook.svg";
import instIcon from "../public/icons-instagram.svg";
import ytIcon from "../public/icons-youtube.svg";
import pinIcon from "../public/icons-pinterest.svg";
import tiIcon from "../public/icons-tiktok.svg";
import starIcon from "../public/icon-star.svg";

const customName = "especiallyforyoulashes";
const description = "Especially for You Lashes";
const socials = [
  {
    link: "https://www.facebook.com/especiallyforyoulashes",
    name: "Facebook",
    icon: fbIcon,
  },

  {
    link: "https://www.instagram.com/especiallyforyoulashes",
    name: "Instagram",
    icon: instIcon,
  },

  {
    link: "https://www.tiktok.com/@efyoulashes",
    name: "Tiktok",
    icon: tiIcon,
  },
];

const socialComponent = ({ link, icon, name }) => (
  <a
    key={name}
    href={link}
    className="bg-color-pink h-20 flex justify-center items-center rounded-xl mt-5 mb-5 border-color-blue-dark border-4"
  >
    <Image src={icon} alt={name} />
    <p className="inline-block align-middle text-black text-xl">{name}</p>
  </a>
);

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: Montserrat;
          background: url("background-2.jpeg") no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <div className="max-w-xs m-auto">
        <div className=" bg-color-pink mt-20 p-10 rounded-xl border-color-blue-dark border-4">
          <figure className="mb-5">
            <div className="rounded-full w-[125px] h-[125px] m-auto border-color-blue-dark border-4 ">
              <Image
                src={icon}
                alt="Avatar"
                className="rounded-full"
                height={125}
                width={125}
              />
            </div>
          </figure>
          <div className="items-center text-center">
            <h2 className="text-xl">@{customName}</h2>
            <Image src={starIcon} alt="start" height={15} width={15} />
            <Image src={starIcon} alt="start" height={15} width={15} />
            <Image src={starIcon} alt="start" height={15} width={15} />
            <p>{description}</p>
          </div>
        </div>

        <div>{socials.map((social) => socialComponent(social))}</div>
      </div>
    </>
  );
}
