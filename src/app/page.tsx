import Fotter from "@/components/Footer";
import InputForm from "@/components/InputForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Todo App",
  description: "todo app for learning purpose",
};
const HomePage = () => {
  return (
    <div className="w-full min-h-screen px-4 bg-gradient-to-r py-10 from-slate-200 via-slate-200 to-slate-200 flex flex-col gap-4">
      <div className="max-w-3xl mx-auto bg-themeColor rounded-md text-white p-4 md:p-20 lg:p-10 flex flex-col gap-4">
        <InputForm />
        <Fotter />
      </div>
    </div>
  );
};

export default HomePage;
