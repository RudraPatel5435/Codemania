import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h1 className="text-5xl font-extrabold text-purple-400 mb-6">
          Choose Your Plan
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Unlock advanced challenges, custom tutorials, and personalized mentoring with Codemania's premium plans. Pick one that suits your coding journey.
        </p>

        <div className="bg-neutral-900 rounded-xl p-8 shadow-lg border border-purple-400">
          <PricingTable />
        </div>
      </section>
    </div>
  );
}
