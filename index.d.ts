interface xuid {
  (now?: number): string;
  create(now?: number): string;
  date(id: string): Date | undefined;
  dateValue(id: string): number | undefined;
  now: null;
  ALPHABET: string;
  MAX_COUNTER: number | undefined;
  MAX_RANDOM: number | undefined;
}
declare const xuid: xuid
export = xuid;
export as namespace xuid
