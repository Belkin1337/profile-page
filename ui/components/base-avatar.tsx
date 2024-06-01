import { useScopedI18n } from "@/lib/i18n/i18n";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import Image from "next/image"
import { avatarsData } from "@/shared/content/avatars";

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
  
  const avatarsArr = avatarsData(otherT)

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rubberband: false,
      vertical: true,
    }, [WheelControls])

  return (
    <div className="flex items-center justify-center relative cursor-pointer overflow-hidden bg-cover p-2 lg:mr-2 mb-4 lg:mb-0 xl:p-4 
    w-[294px] h-[286px] sm:w-[300px] sm:h-[300px] xl:w-[364px] xl:h-[364px]"
      style={{
        backgroundImage: `url("/images/main/glass.webp")`
      }}>
      <div ref={sliderRef} className="keen-slider overflow-hidden w-[280px] h-[260px] sm:w-[300px] sm:h-[280px] xl:w-[334px] xl:h-[334px]">
        {avatarsArr.map((item, idx) => (
          <Image
            key={idx}
            src={item.image}
            alt={item.title}
            width={400}
            loading="lazy"
            height={400}
            title={item.title}
            className={`keen-slider__slide duration-300 w-full transition number-slide${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}