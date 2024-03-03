import localFont from "next/font/local"

const titleFont = localFont({
  src: "../public/font/Monocraft.otf"
})

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  titleBody: string,
  subtitleBody?: string
}

export const Title = ({
  titleBody,
  subtitleBody,
  ...props
}: TitleProps) => {
  return (
    <h1
      className={`dark:text-MAIN_SEAWAVE/95 text-LIGHT_SEAWAVE text-[1.6rem] md:text-[4rem] text-center ${titleFont.className}`}
      {...props}
    >
      {titleBody}
      {subtitleBody && (
        <p className="text-neutral-800 dark:text-neutral-400 text-[1rem] md:text-[2rem] text-center">
          {subtitleBody}
        </p>
      )}
    </h1>
  );
}