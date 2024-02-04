import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function User({
  avatarUrl,
  displayName,
  publishedDate,
}: {
  avatarUrl: string;
  displayName: string;
  publishedDate: Date | string;
}) {
  const date = new Date(publishedDate);

  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>
          {avatarUrl === "" ? (displayName ? displayName[0] : "") : ""}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-baseline">
          <p className="text-sm text-primary/80">{displayName}</p>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {date.getFullYear() +
            "-" +
            (date.getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            date.getDate().toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
