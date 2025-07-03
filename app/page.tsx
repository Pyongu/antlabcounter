import LiveClock from "./components/LiveClock";
import Counter from "./components/counter";
import CountdownTimer from "./components/countdown";

export default function Home() {
  const labels = [
    "Pogo In",
    "Other In",
    "Other In",
    "Pogo In",
    "Pogo Out",
    "Other Out",
    "Other Out",
    "Pogo Out"
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <div className="h-24 flex items-center justify-between px-6">
        <LiveClock />
        <CountdownTimer startMinutes={5} />
      </div>

      <div className="flex-1 p-6 grid grid-cols-4 grid-rows-2 gap-4">
        {labels.map((label, i) => (
          <Counter key={i} label={label} />
        ))}
      </div>
    </main>
  );
}

