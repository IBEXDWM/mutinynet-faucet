import { Match, Switch, createSignal } from "solid-js";
import { createRouteAction } from "solid-start";

const FAUCET_API_URL = import.meta.env.VITE_FAUCET_API;

const SIMPLE_BUTTON =
  "mt-4 px-4 py-2 rounded-xl text-xl font-semibold bg-black text-white border border-white";

function Pop(props: any) {
  return (
    <div class="rounded-xl p-4 w-full flex flex-col items-center gap-2 bg-[rgba(0,0,0,0.5)] drop-shadow-blue-glow">
      <Switch>
        <Match when={props.result}>
          <p>Here's your bolt11</p>
          <p class="text-sm font-mono" style="overflow-wrap: anywhere">{props.result}</p>
          <button
            class={SIMPLE_BUTTON}
            onClick={() => window.location.reload()}
          >
            Start Over
          </button>
        </Match>
        <Match when={props.error}>
          <p>Something went wrong</p>
          <code>{props.error.message}</code>
          <button
            class={SIMPLE_BUTTON}
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </Match>
        <Match when={true}>
          <p>You probably screwed this up didn't you?</p>
          <button
            class={SIMPLE_BUTTON}
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </Match>
      </Switch>
    </div>
  );
}

export function LnWallet() {
  const [sendResult, { Form }] = createRouteAction(
    async (formData: FormData) => {
      let howMuchSats = parseInt(formData.get("how_much")?.toString() ?? "1000000");

      const res = await fetch(`${FAUCET_API_URL}/api/bolt11`, {
        method: "POST",
        body: JSON.stringify({ amount_sats: howMuchSats }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(await res.text());
      } else {
        return res.json();
      }
    }
  );
  const [amount, setAmount] = createSignal("100000");

  return (
    <Switch>
      <Match when={sendResult.result || sendResult.error}>
        <Pop result={sendResult.result.bolt11} error={sendResult.error} />
      </Match>
      <Match when={true}>
        <Form class="rounded-xl p-4 flex flex-col gap-2 bg-[rgba(0,0,0,0.5)] w-full drop-shadow-blue-glow">
          <label for="address">Create Bolt11 Payment Request</label>
          <label for="how_much">How much? (sats)</label>
          <input
            type="number"
            name="how_much"
            placeholder="sats"
            value={amount()}
            onInput={(e) => setAmount(e.currentTarget.value)}
            max="10000001"
          />
          <input
            type="submit"
            disabled={sendResult.pending}
            value={sendResult.pending ? "..." : "Create"}
            class="mt-4 p-4 rounded-xl text-xl font-semibold bg-[#1EA67F] text-white disabled:bg-gray-500"
          />
        </Form>
      </Match>
    </Switch>
  );
}

