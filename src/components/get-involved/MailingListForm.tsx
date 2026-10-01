import { useState } from "react";
import { cn } from "@/lib/utils";

const input =
  "w-full rounded-2xl border border-ink/10 bg-paper-warm px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20";

type Status = "idle" | "submitting" | "success" | "error";

export default function MailingListForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("Submitting...");

    try {
      const res = await fetch(import.meta.env.VITE_SIGNUP_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error, try again");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div>
        <label htmlFor="newsletter-email" className="mb-1.5 block text-sm font-medium">
          Email <span className="text-maroon">*</span>
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={input}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Subscribe"}
      </button>
      {message && (
        <p className={cn("text-sm", status === "error" ? "text-maroon" : "text-ink-mute")}>{message}</p>
      )}
    </form>
  );
}
