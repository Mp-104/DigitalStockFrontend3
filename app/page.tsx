import Image from "next/image";
import Link from "next/link";
import CustomLink from "./_component/ui-elements/CustomLink";
import CustomButton from "./_component/ui-elements/CustomButton";

export default function Home() {
  return (
    <>
      <div className="p-4 pt-12 ">

        <main className="px-4 h-5/6 bg-blue-500 flex flex-col justify-evenly items-center md:flex-row">

          <section className=" md:max-w-md lg:max-w-lg">

            <h1 className="text-[max(4vw,24px)]  font-extrabold font-mono leading-snug tracking-wider ">Welcome User{" "}, to<span className="bg-gradient-to-r from-red-400 via-blue-300 to-green-300 bg-clip-text text-transparent"> DigitalStock</span> test test</h1>

            <p className="font-mono leading-loose mt-8 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam officia, quo iste, modi illum libero, dignissimos officiis cupiditate sint architecto! Minima temporibus, error nobis hic quibusdam debitis et nihil?</p>

            <section className="flex justify-evenly mt-8 space-x-8 mt-16">
              <CustomButton href={"/store"} text={"Shop"}></CustomButton>
              <CustomButton href={"/about"} text={"About Us"}></CustomButton>
            
            </section>
          </section>

            

          <h1 className="text-tes-50">Home</h1>

          <div className="max-w-md md:max-w-xl  p-4 bg-red-200">

            <Image src={"/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.avif"} alt=""
            width={700}
            height={500}
            className=""></Image>

            <section className="flex justify-evenly mt-8 space-x-8 mt-16">
              <CustomButton href={"/store"} text={"Shop"}></CustomButton>
              <CustomButton href={"/about"} text={"About Us"}></CustomButton>
            
            </section>
            
          </div>

          <Link href={"/test"} >To test</Link>
          <CustomLink url={"/test"} text={"test"} ></CustomLink>

        </main>
        
      </div>
    </>
  );
}
