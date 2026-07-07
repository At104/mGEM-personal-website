import React from "react";
import { cn } from "@/lib/utils";

const input =
  "w-full rounded-2xl border border-ink/10 bg-paper-warm px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20";

export default function MailingListForm({ className }: { className?: string }) {
  return (
    <form
      action="https://google.us8.list-manage.com/subscribe/post?u=5eb5b5dd275ceaa9486ea4d89&amp;id=293e3ffd61&amp;f_id=00ee23e0f0"
      method="post"
      target="_blank"
      className={cn("space-y-4", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="mce-FNAME" className="mb-1.5 block text-sm font-medium">
            First name <span className="text-maroon">*</span>
          </label>
          <input id="mce-FNAME" name="FNAME" type="text" required className={input} />
        </div>
        <div>
          <label htmlFor="mce-LNAME" className="mb-1.5 block text-sm font-medium">
            Last name <span className="text-maroon">*</span>
          </label>
          <input id="mce-LNAME" name="LNAME" type="text" required className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="mce-EMAIL" className="mb-1.5 block text-sm font-medium">
          Email <span className="text-maroon">*</span>
        </label>
        <input id="mce-EMAIL" name="EMAIL" type="email" required className={input} />
      </div>
      <input type="hidden" name="tags" value="4953809" />
      <div aria-hidden className="absolute -left-[5000px]">
        <input type="text" name="b_5eb5b5dd275ceaa9486ea4d89_293e3ffd61" tabIndex={-1} defaultValue="" />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon-deep sm:w-auto"
      >
        Subscribe
      </button>
    </form>
  );
}
