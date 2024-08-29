import Link from "next/link";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Fotter = () => {
  const footerArray = [
    {
      icon: <FaGithub />,
      href: "https://github.com/M-Shourav",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=100027878711748",
    },
    {
      icon: <MdOutlineMailOutline />,
      href: "https://www.facebook.com/profile.php?id=100027878711748",
    },
  ];
  return (
    <footer className="w-full text-gray-400 font-medium flex flex-col gap-y-2 ">
      <p className=" text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit
        iure dicta est! Dolores quis alias reiciendis officiis provident nulla
        nesciunt saepe facere molestias, hic aliquid impedit minus optio
        perferendis minima omnis cum, consequatur dolorem vero nisi. Quam, iste
      </p>
      <div
        className=" flex items-center justify-center gap-4 text-2xl
       "
      >
        {footerArray?.map((item) => (
          <Link
            key={item?.href}
            href={item?.href}
            target="blank"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600
           shadow-md shadow-gray-700 hover:border-green-700 duration-200 "
          >
            {item?.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Fotter;
