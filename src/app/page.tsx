import { FaShieldAlt, FaMicrochip, FaWallet } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mt-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Train Your Wallet Security Skills
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Wise Signer challenges you to identify safe and dangerous wallet transactions
          before signing them. Master multi-sig and hardware wallet security in a
          safe environment.
        </p>
        <a
          href="/simulated/questions/1"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Start Training Now
        </a>
      </div>

      {/* How to Play Section */}
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">Choose Your Challenge Mode</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Simulated Mode */}
          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-green-500 transition">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600/20 p-3 rounded-full">
                <FaWallet size={28} className="text-green-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Simulated Wallet</h3>
            <p className="text-gray-400">
              A simplified experience without real network connections.
              Practice making sign/reject decisions in quick, focused challenges
              to build your transaction safety intuition.
            </p>
            <div className="mt-4 text-center">
              <a
                href="/simulated/questions/1"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Play Simulated Mode →
              </a>
            </div>
          </div>

          {/* Tenderly Mode */}
          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500 transition">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600/20 p-3 rounded-full">
                <FaMicrochip size={28} className="text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Tenderly Virtualnet</h3>
            <p className="text-gray-400">
              We spin up a Tenderly virtual testnet (a remote fork) to create a realistic
              environment where you can practice with actual blockchain interactions without
              risking real assets.
            </p>
            <div className="mt-4 text-center">
              <a
                href="/connected/welcome"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Play with Tenderly →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Why Train With Wise Signer?</h2>
        <p className="text-xl text-gray-300">
          Smart contract and wallet safety is critical in Web3. Wise Signer teaches you
          to recognize common attacks and deceptive transactions before they compromise
          your assets. Build confidence in managing multi-sig wallets and hardware wallets
          through hands-on practice.
        </p>
      </div>
    </div>
  );
}