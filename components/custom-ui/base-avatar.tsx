import { useScopedI18n } from "@/lib/next-international";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"

import pic1 from '@/public/images/avatar4.jpg';
import pic2 from "@/public/images/avatar1.jpg"
import pic3 from "@/public/images/avatar2.jpg"
import pic4 from "@/public/images/avatar3.jpg"
import pic5 from "@/public/images/avatar5.jpg"
import glassblock from "@/public/images/glass.webp"
import { Avatar } from "../ui/avatar";

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
    { title: otherT('I'), image: pic5, },
    { title: "73 6b 61 6c 65 6d 69", image: pic2, },
    { title: otherT('Koshka'), image: pic3, },
    { title: otherT('Not I'), image: pic1, },
    { title: otherT('Kyddiekafka - I recommend'), image: pic4, },
  ];


  return (
    <div className={`flex items-center justify-center w-[340px] relative h-[340px] -right-2 md:right-0 md:w-[492px] md:h-[492px] overflow-hidden mx-2 ease-in bg-cover p-2 xl:p-4 z-15`}
      style={{ backgroundImage: `url(${glassblock.src})` }}>
      <div ref={sliderRef} className="keen-slider overflow-hidden w-[310px] h-[320px] md:h-[466px] md:w-[466px]">
        {avatarList.map((item, itemIndex) => (
          <Avatar key={itemIndex} src={item.image} alt={item.title} title={item.title} className={`keen-slider__slide number-slide${itemIndex + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default BaseAvatar;