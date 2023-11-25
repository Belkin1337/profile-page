import { useScopedI18n } from "@/lib/next-international";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"

import glassblock from "@/public/images/main/glass.webp"

import { Avatar } from "@/components/ui/avatar";

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

const BaseAvatar = () => {
  const otherT = useScopedI18n('other')

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true, rubberband: false, vertical: true, }, [WheelControls])

  const avatarList = [
    { title: otherT('I'), image: "/images/avatars/avatar5.jpg", },
    { title: "73 6b 61 6c 65 6d 69", image: "/images/avatars/avatar1.jpg", },
    { title: otherT('Koshka'), image: "/images/avatars/avatar2.jpg", },
    { title: otherT('Not I'), image: "/images/avatars/avatar4.jpg", },
    { title: otherT('Kyddiekafka - I recommend'), image: "/images/avatars/avatar3.jpg", },
  ];

  return (
    <div className={`flex items-center justify-center relative overflow-hidden 
    bg-cover p-2 lg:mr-2 mb-4 lg:mb-0 xl:p-4 z-15
      w-[294px] h-[286px]
      sm:w-[300px] sm:h-[300px]
      xl:w-[364px] xl:h-[364px]
    `}
      style={{
        backgroundImage: `url(${glassblock.src})`
      }}>
      <div
        ref={sliderRef}
        className="keen-slider overflow-hidden 
          w-[280px] h-[260px] 
          sm:w-[300px] sm:h-[280px] 
          xl:w-[334px] xl:h-[334px]
        ">
        {avatarList.map((item, itemIndex) => (
          <Avatar
            key={itemIndex}
            src={item.image}
            alt={item.title}
            title={item.title}
            className={`keen-slider__slide number-slide${itemIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BaseAvatar;