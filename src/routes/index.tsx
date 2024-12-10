import { Faucet } from "~/components/Faucet";
import { LnChannel } from "~/components/LnChannel";
import { LnFaucet } from "~/components/LnFaucet";
import { NWC } from "~/components/NWC";
import { LnWallet } from "~/components/LnWallet";

export default function Home() {
    return (
        <main class="flex flex-col gap-4 items-center w-full max-w-[40rem] mx-auto">
            <h1 class="font-mono text-4xl drop-shadow-text-glow p-8 font-bold">
                mutinynet
            </h1>
            <Faucet />
            <LnFaucet />
            <LnWallet />
            <LnChannel />
            <NWC />
            <div class="border border-white/50 rounded-xl p-4 w-full gap-2 flex flex-col">
                <h1 class="font-bold text-xl font-mono">Send back your unused sats</h1>
                <pre class="overflow-x-auto whitespace-pre-line break-all p-4 bg-white/10 rounded-lg">
                    tb1prf67vxmhfllxcm5gernhe0me057dp90xuglrg2ryzmz8rlhsnpqsj38gye
                </pre>
            </div>
            <div class="border border-white/50 rounded-xl p-4 w-full gap-2 flex flex-col">
                <h1 class="font-bold text-xl font-mono">Faucet Lightning Node</h1>
                <pre class="overflow-x-auto whitespace-pre-line break-all p-4 bg-white/10 rounded-lg">
                    03ecdb4fd1d2be65c311c891459e5d7f639fef20ade8c939af03dab7b0a84ef587@10.10.4.37:9736
                </pre>
            </div>
            <div class="h-4" />
        </main>
    );
}
