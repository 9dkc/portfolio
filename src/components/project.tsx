export function Project({
  icon,
  name,
  description,
  href,
}: {
  icon?: string;
  name: string;
  description: string;
  href: string;
}) {
  return (
    <div className="p-4 border-border border-2 h-[13ch] flex flex-col rounded-md">
      <div className="flex flex-row gap-2">
        {icon ? (
          <img
            src={icon}
            alt={`${name} icon`}
            width="32"
            height="32"
            className="rounded-full"
          />
        ) : (
          ""
        )}
        <h3 className="text-2xl font-display">{name}</h3>
      </div>
      <p className="text-sm">{description}</p>

      <a
        href={href}
        className="bg-accent rounded-md p-3 text-center flex flex-row justify-center items-center h-8 w-full mt-auto"
      >
        <button type="submit">Check it out</button>
      </a>
    </div>
  );
}
