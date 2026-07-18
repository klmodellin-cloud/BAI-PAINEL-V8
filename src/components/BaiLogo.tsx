import { cn } from "@/lib/utils";

export function BaiLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img src="/BAI.svg" alt="Logo BAI" className="size-10 rounded-xl" />
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-foreground">Banco BAI</span>
        <span className="text-xs text-muted-foreground">Portal do Cliente</span>
      </div>
    </div>
  );
}
