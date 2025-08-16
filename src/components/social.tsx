import { SimpleIcon } from "simple-icons";

export function Social({
  icon,
  name,
  href,
}: {
  icon: SimpleIcon;
  name: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-row max-w-fit px-3 ml-2 py-1 bg-background items-center justify-center text-sm gap-2 rounded-full border-2 border-border font-sans"
    >
      <span
        dangerouslySetInnerHTML={{
          __html: icon.svg.replace(
            `role="img"`,
            `role="img" width="24" height="24" fill="currentColor"`
          ),
        }}
        className="fill-accent text-accent"
      ></span>
      {name}
    </a>
  );
}
