"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "learning-english-progress";

const skills = ["Speaking", "Listening", "Vocabulary", "Grammar"];

const dailyGoals = [
  "Speak English for 10 minutes",
  "Learn 5 new words",
  "Listen to one short audio",
  "Write 3 sentences",
];

export function ProgressTracker() {
  const [progress, setProgress] = useState<Record<string, number>>(
    Object.fromEntries(skills.map((s) => [s, 0]))
  );
  const [done, setDone] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setProgress(parsed.progress);
        setDone(parsed.done);
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ progress, done }));
    } catch {}
  }, [progress, done, loaded]);

  const change = (skill: string, amount: number) =>
    setProgress((p) => ({
      ...p,
      [skill]: Math.min(100, Math.max(0, p[skill] + amount)),
    }));

  const toggleGoal = (goal: string) =>
    setDone((d) => (d.includes(goal) ? d.filter((g) => g !== goal) : [...d, goal]));

  const overall = Math.round(
    skills.reduce((sum, s) => sum + progress[s], 0) / skills.length
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-3xl border border-[#dbe7ff] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Your Skills</h3>
          <span className="rounded-full bg-[#2563eb] px-4 py-1 text-sm font-semibold text-white">
            Overall {overall}%
          </span>
        </div>

        <div className="mt-6 space-y-5">
          {skills.map((skill) => (
            <div key={skill}>
              <div className="mb-2 flex items-center justify-between text-sm font-medium">
                <span>{skill}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => change(skill, -10)}
                    className="h-7 w-7 rounded-full border border-[#dbe7ff] hover:bg-[#eef4ff]"
                  >
                    −
                  </button>
                  <span className="w-10 text-center">{progress[skill]}%</span>
                  <button
                    onClick={() => change(skill, 10)}
                    className="h-7 w-7 rounded-full bg-[#2563eb] text-white hover:bg-[#1d4fd8]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#eef4ff]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#14b8a6] transition-all duration-500"
                  style={{ width: `${progress[skill]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[#dbe7ff] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Today&apos;s Goals</h3>
          <span className="text-sm text-[#5b6b85]">
            {done.length}/{dailyGoals.length} done
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {dailyGoals.map((goal) => {
            const checked = done.includes(goal);
            return (
              <li key={goal}>
                <button
                  onClick={() => toggleGoal(goal)}
                  className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
                    checked
                      ? "border-[#14b8a6] bg-[#ecfdf9]"
                      : "border-[#dbe7ff] hover:bg-[#eef4ff]"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm ${
                      checked
                        ? "border-[#14b8a6] bg-[#14b8a6] text-white"
                        : "border-[#9fb3d6]"
                    }`}
                  >
                    {checked && "✓"}
                  </span>
                  <span className={checked ? "line-through opacity-60" : ""}>
                    {goal}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {done.length === dailyGoals.length && (
          <p className="mt-5 rounded-xl bg-[#fff7d6] p-4 text-sm font-medium">
            🎉 Amazing! You completed all your goals today. Keep going!
          </p>
        )}
      </div>
    </div>
  );
}

export function ContactTeacher() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-[#dbe7ff] bg-white px-4 py-3 outline-none focus:border-[#2563eb]";

  if (sent) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-[#14b8a6] bg-[#ecfdf9] p-8 text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="mt-3 text-xl font-bold">Thank you, {name}!</h3>
        <p className="mt-2 text-[#5b6b85]">
          Your message has been received. Your teacher will contact you soon.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setName("");
            setMessage("");
          }}
          className="mt-6 rounded-full border border-[#2563eb] px-6 py-2 font-semibold text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={send}
      className="mx-auto max-w-2xl space-y-4 rounded-3xl border border-[#dbe7ff] bg-white p-6 shadow-sm md:p-8"
    >
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className={field}
      />
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className={field}
      >
        <option>Beginner</option>
        <option>Elementary</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <textarea
        required
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask your teacher anything..."
        className={field}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-[#2563eb] px-8 py-3 font-semibold text-white transition hover:bg-[#1d4fd8]"
      >
        Contact Me
      </button>
    </form>
  );
}