import LiveClock from "./components/LiveClock";
import Counter from "./components/counter";
import CountdownTimer from "./components/countdown";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      {/* Clock and Countdown side by side */}
      <div className="h-24 flex items-center justify-between">
        <LiveClock />
        <CountdownTimer startMinutes={5} />
      </div>

      {/* 8 x 2 Grid */}
      <div className="flex-1 p-6 grid grid-cols-4 grid-rows-2 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Counter key={i} />
        ))}
      </div>
    </main>
  );
}
