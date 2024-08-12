import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-green-400">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/ali.JPG" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hi, I'm Farhan, a Class 11th student at Khawaja Fareed College Rahim Yar Khan.I work as a freelancer, taking on various projects and tasks to gain new skills and experiences.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Farhan Ali
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Freelancer, GKFC
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
