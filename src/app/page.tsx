import { cacheLife } from "next/cache";
import { ProgressTracker, ContactTeacher } from "@/components/Interactive";

const SITE_NAME = "learning.english";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const motivations = [
  {
    title: "Speak From Day One",
    text: "You don't need perfect grammar to start. Open your mouth, say it, and grow.",
  },
  {
    title: "Mistakes Mean Progress",
    text: "Every mistake is proof that you are trying. Fluent speakers made thousands of them.",
  },
  {
    title: "Small Steps, Big Results",
    text: "Just 15 minutes a day can change your life in a few months.",
  },
  {
    title: "Confidence Opens Doors",
    text: "Better English means better jobs, better studies and better opportunities.",
  },
  {
    title: "Learn at Your Own Pace",
    text: "No pressure, no comparison. Your journey is yours alone.",
  },
  {
    title: "Your Teacher Is Always Near",
    text: "Stuck on something? Message your teacher anytime and get real help.",
  },
  {
    title: "See Your Growth",
    text: "Track your progress every day and watch yourself improve week by week.",
  },
  {
    title: "Start Today, Not Tomorrow",
    text: "It's never too late or too early. The best time to begin is right now.",
  },
];

export default async function Home() {
  return (
    <main className="bg-[#f7faff] text-[#14213d]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#dbe7ff] bg-[#f7faff]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-bold tracking-wide">
            learning.<span className="text-[#2563eb]">english</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#why" className="hover:text-[#2563eb]">Why Us</a>
            <a href="#progress" className="hover:text-[#2563eb]">My Progress</a>
            <a href="#teacher" className="hover:text-[#2563eb]">Contact Me</a>
          </div>
          <a
            href="#teacher"
            className="rounded-full bg-[#2563eb] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4fd8]"
          >
            Contact Me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#2563eb]">
            Spoken English Course
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Speak English <br />
            With <span className="text-[#2563eb]">Confidence.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#5b6b85]">
            Learn to speak English naturally with a friendly teacher, simple
            daily practice and progress you can actually see.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#progress"
              className="rounded-full bg-[#2563eb] px-8 py-3 font-semibold text-white transition hover:bg-[#1d4fd8]"
            >
              Track My Progress
            </a>
            <a
              href="#teacher"
              className="rounded-full border border-[#2563eb] px-8 py-3 font-semibold text-[#2563eb] transition hover:bg-[#2563eb] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#14b8a6] p-8 shadow-xl">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative flex h-full flex-col justify-center gap-5">
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-5 py-4 text-lg font-semibold text-[#14213d] shadow-lg">
              Hello! How are you? 👋
            </div>
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[#fff7d6] px-5 py-4 text-lg font-semibold text-[#14213d] shadow-lg">
              I&apos;m fine, thank you! 😊
            </div>
            <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-5 py-4 text-lg font-semibold text-[#14213d] shadow-lg">
              Great! Let&apos;s speak English today.
            </div>
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[#fff7d6] px-5 py-4 text-lg font-semibold text-[#14213d] shadow-lg">
              Yes, I&apos;m ready! 🚀
            </div>
            <div className="mx-auto mt-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              🔥 7 day learning streak
            </div>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section id="why" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Why You Will <span className="text-[#2563eb]">Love</span> Learning Here
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[#5b6b85]">
            Your English journey starts with one small step. We walk with you
            the whole way.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {motivations.map((m, i) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[#dbe7ff] bg-[#f7faff] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-[#5b6b85]">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress */}
      <section id="progress" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Track Your Progress
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-xl text-center text-[#5b6b85]">
          Update your skills and tick your daily goals. Your progress is saved
          on your device.
        </p>
        <ProgressTracker />
      </section>

      {/* Contact */}
      <section id="teacher" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-3 mb-12 max-w-xl text-center text-[#5b6b85]">
            Have a question or need help? Fill in the form and your teacher
            will get back to you.
          </p>
          <ContactTeacher />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#14b8a6] px-6 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to speak English with confidence?
          </h2>
          <p className="mt-3 text-white/85">
            Your first lesson is just one message away.
          </p>
          <a
            href="#teacher"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-[#2563eb] transition hover:bg-[#f7faff]"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#dbe7ff] py-8 text-center text-sm text-[#5b6b85]">
        © {await getCurrentYear()} {SITE_NAME}. All rights reserved.
      </footer>
    </main>
  );
}