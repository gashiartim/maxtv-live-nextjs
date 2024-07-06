import { Hero } from "@/components";

export default function Home() {
  // return (
  //   <main className="h-screen flex items-center justify-center flex-col">
  //     {/* Lets add a currently underwork page: */}
  //     <div className="font-bold text-3xl">MAXTV LIVE</div>
  //     <h1 className="text-xl">
  //       Na vjen keq, ne po bëjmë disa punë në web sajt. kthehemi shumë
  //       shpejt......
  //     </h1>
  //   </main>
  // );

  return (
    <div className="flex items-center justify-center flex-col">
      <Hero />
    </div>
  );
}
