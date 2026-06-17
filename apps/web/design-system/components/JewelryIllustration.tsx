type JewelryKind =
  | "hero-ring"
  | "pendant"
  | "bracelet"
  | "earrings"
  | "product-ring"
  | "product-necklace"
  | "product-earrings"
  | "product-bracelet";

interface JewelryIllustrationProps {
  kind: JewelryKind;
  staggered?: boolean;
}

export function JewelryIllustration({ kind, staggered = false }: JewelryIllustrationProps) {
  if (kind === "hero-ring") {
    return (
      <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full border border-border2 bg-[linear-gradient(135deg,rgba(255,255,255,0.9)_0%,rgba(244,236,229,0.7)_50%,rgba(237,224,212,0.5)_100%)] shadow-elevated backdrop-blur-sm before:absolute before:inset-5 before:rounded-full before:border before:border-[rgba(200,154,123,0.28)] before:bg-[linear-gradient(135deg,rgba(200,154,123,0.08),transparent)] lg:h-[340px] lg:w-[340px]">
        <div className="relative z-10 h-14 w-14 rounded-full bg-[linear-gradient(135deg,#c9b0dc,#a980c0,#7a5898)] shadow-[0_4px_20px_rgba(157,111,83,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] lg:h-[90px] lg:w-[90px]" />
        <div className="absolute -right-3 -top-3 rounded-pill border border-border bg-glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-accent2 shadow-card backdrop-blur-md">
          New Arrival
        </div>
        <div className="absolute -bottom-2 left-2.5 rounded-pill border border-border bg-glass px-3.5 py-1.5 text-[11px] tracking-[0.1em] text-text2 shadow-card backdrop-blur-md">
          9K Gold · ₹8,499
        </div>
      </div>
    );
  }

  if (kind === "pendant") {
    return (
      <div className="relative h-[90px] w-16 before:absolute before:left-1/2 before:top-0 before:h-[22px] before:w-0.5 before:-translate-x-1/2 before:rounded-sm before:bg-[linear-gradient(180deg,var(--color-accent2),var(--color-accent))] after:absolute after:bottom-0 after:left-1/2 after:h-[52px] after:w-[52px] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(135deg,#c9b0dc,#a980c0,#7a5898)] after:shadow-[0_6px_24px_rgba(157,111,83,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]" />
    );
  }

  if (kind === "bracelet") {
    return (
      <div className="relative h-20 w-20 rounded-full border-[6px] border-transparent bg-[linear-gradient(var(--color-glass),var(--color-glass))_padding-box,linear-gradient(135deg,#c9b0dc,#a980c0,#7a5898,#a980c0)_border-box] shadow-[0_4px_20px_rgba(157,111,83,0.3)] after:absolute after:right-[-4px] after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-[linear-gradient(135deg,#c9b0dc,#8a6ba3)] after:shadow-[0_2px_8px_rgba(157,111,83,0.4)]" />
    );
  }

  if (kind === "earrings") {
    return (
      <div className="flex items-end gap-4">
        {[0, 1].map((item) => (
          <div
            className={`flex flex-col items-center gap-0.5 ${staggered && item === 1 ? "mt-2.5" : ""}`}
            key={item}
          >
            <div className="h-3.5 w-0.5 rounded-sm bg-[linear-gradient(180deg,var(--color-accent2),var(--color-accent))]" />
            <div className="h-7 w-5 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] bg-[linear-gradient(135deg,#e4c4b0,#b99bcc,#8a6ba3)] shadow-[0_4px_12px_rgba(157,111,83,0.3)]" />
          </div>
        ))}
      </div>
    );
  }

  if (kind === "product-ring") {
    return (
      <div className="relative h-20 w-20 rounded-full border-[7px] border-transparent bg-[linear-gradient(var(--color-bg),var(--color-bg))_padding-box,linear-gradient(135deg,#e4c4b0,#b99bcc,#8a6ba3)_border-box] shadow-[0_6px_20px_rgba(157,111,83,0.25),inset_0_1px_0_rgba(255,255,255,0.6)] after:absolute after:right-3 after:top-[-2px] after:h-3.5 after:w-3.5 after:rounded-full after:bg-[linear-gradient(135deg,#e8d0c0,#b99bcc,#8a5e42)] after:shadow-[0_2px_8px_rgba(157,111,83,0.4)]" />
    );
  }

  if (kind === "product-necklace") {
    return (
      <div className="flex h-[90px] w-[70px] flex-col items-center">
        <div className="h-10 w-[60px] rounded-t-full border border-b-0 border-accent opacity-50" />
        <div className="-mt-0.5 h-7 w-7 rounded-full bg-[linear-gradient(135deg,#c9b0dc,#a980c0,#7a5898)] shadow-[0_4px_16px_rgba(157,111,83,0.4)]" />
      </div>
    );
  }

  if (kind === "product-earrings") {
    return (
      <div className="flex gap-3.5">
        {[0, 1].map((item) => (
          <div className={`flex flex-col items-center gap-1 ${item === 1 ? "mt-2.5" : ""}`} key={item}>
            <div className="h-4 w-0.5 rounded-sm bg-accent" />
            <div className="h-[30px] w-[22px] rounded-[50%_50%_46%_54%/40%_40%_60%_60%] bg-[linear-gradient(160deg,#d8c0ec,#b090d0,#7a5898)] shadow-[0_4px_12px_rgba(157,111,83,0.3)]" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-14 w-[90px] rounded-full border-[5px] border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(135deg,#e4c4b0,#b99bcc,#8a6ba3,#b99bcc)_border-box] shadow-[0_4px_16px_rgba(157,111,83,0.25)]" />
  );
}
