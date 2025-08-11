import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
    return (
        <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white flex items-center justify-center">
            <section className="max-w-5xl mx-auto px-6 py-8 text-center">
                {/* Title */}
                <h1 className="text-5xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                        Choose Your Plan
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
                    Unlock advanced challenges, custom tutorials, and personalized mentoring
                    with <span className="text-purple-400 font-semibold">Codemania's premium plans</span>.
                    Pick one that suits your coding journey.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-400">
                    <span className="px-3 py-1 border border-gray-700 rounded-full">
                        ✅ Cancel anytime
                    </span>
                    <span className="px-3 py-1 border border-gray-700 rounded-full">
                        💳 Credit cards welcome — they'll have a great time
                    </span>
                    <span className="px-3 py-1 border border-gray-700 rounded-full">
                        🔒 Secure payment
                    </span>
                </div>

                {/* Pricing Table */}
                <div className="bg-neutral-900 rounded-2xl p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] border border-purple-500/40 hover:scale-[1.02] transition-transform duration-300">
                    <PricingTable />
                </div>
            </section>
        </div>
    );
}