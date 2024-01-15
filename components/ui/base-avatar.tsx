import { useScopedI18n } from "@/lib/next-international";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import Image from "next/image"

const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>
  let position: {
    x: number
    y: number
  }
  let wheelActive: boolean

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    )
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    }
    dispatch(e, "ksDragStart")
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag")
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd")
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault()
    if (!wheelActive) {
      wheelStart(e)
      wheelActive = true
    }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => {
      wheelActive = false
      wheelEnd(e)
    }, 50)
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    })
  })
}

export const BaseAvatar = () => {
  const otherT = useScopedI18n('other')

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true, rubberband: false, vertical: true, }, [WheelControls])

  const avatarList = [
    { title: otherT('I'), image: "https://cdn.discordapp.com/attachments/904344676587417621/1196592822955032667/avatar5.jpg?ex=65b830e8&is=65a5bbe8&hm=767fe8ee4acee086717955be1523b0566caae9d704c9c560c1436a0765b90742&", },
    { title: "73 6b 61 6c 65 6d 69", image: "https://cdn.discordapp.com/attachments/904344676587417621/1196592821247938630/avatar1.jpg?ex=65b830e8&is=65a5bbe8&hm=722183740b0225c75c0d640aabe3de8a8ac225e847a157589f6ac47e570b52a3&", },
    { title: otherT('Koshka'), image: "https://cdn.discordapp.com/attachments/904344676587417621/1196592821575106600/avatar2.jpg?ex=65b830e8&is=65a5bbe8&hm=aa5fa5dc91fe8183fa8ffc506369883a325bb4b3f91cd37f17627b47fa340f4c&", },
    { title: otherT('Not I'), image: "https://cdn.discordapp.com/attachments/904344676587417621/1196592822187475046/avatar4.jpg?ex=65b830e8&is=65a5bbe8&hm=401e413c984ddcce95dd87b14196a488233cc648c12235ed3030c2cd4d6ffa37&", },
    { title: otherT('Kyddiekafka - I recommend'), image: "https://cdn.discordapp.com/attachments/904344676587417621/1196592821914832956/avatar3.jpg?ex=65b830e8&is=65a5bbe8&hm=d402cea0123193562493f8f2e8b0b9f42df557b681dba0e11232106326c0f059&", },
  ];

  return (
    <div className="flex items-center justify-center relative cursor-pointer overflow-hidden bg-cover p-2 lg:mr-2 mb-4 lg:mb-0 xl:p-4
      w-[294px] h-[286px] sm:w-[300px] sm:h-[300px] xl:w-[364px] xl:h-[364px]" style={{ backgroundImage: `url("/images/main/glass.webp")`}}>
      <div ref={sliderRef} className="keen-slider overflow-hidden w-[280px] h-[260px] sm:w-[300px] sm:h-[280px] xl:w-[334px] xl:h-[334px]">
        {avatarList.map((item, itemIndex) => (
          <Image
            key={itemIndex}
            src={item.image}
            alt={item.title}
            width={400}
            loading="eager"
            height={400}
            title={item.title}
            className={`keen-slider__slide duration-300 transition number-slide${itemIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}