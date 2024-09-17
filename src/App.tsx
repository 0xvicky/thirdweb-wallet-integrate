import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "./client";
import { useAddress } from "@thirdweb-dev/react";
const wallets = [createWallet("io.metamask")];

const App = () => {
  const addr = useAddress();
  const address = () => {
    console.log(addr);
  };
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <ConnectButton client={client} wallets={wallets} />
        </div>
        <button onClick={address}>Address</button>
      </div>
    </main>
  );
};

export default App;
