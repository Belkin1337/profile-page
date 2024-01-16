import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const photos = [
  "https://cdn.discordapp.com/attachments/904344676587417621/1196949190706733197/photo_2024-01-12_00-31-03.jpg?ex=65b97ccd&is=65a707cd&hm=35a0b07ec0dc39d6187d639ca51aee5f30109d21214fcf8197a7b9e2fe35eef6&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1196949190362804294/photo_2023-12-07_01-34-08.jpg?ex=65b97ccd&is=65a707cd&hm=5cf6bdfc2f2f22bbb3d0ff0d8748b540e6d66a90c8778311a605f2b38dbabe63&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1196949190090170389/photo_2023-11-23_16-52-12.jpg?ex=65b97ccd&is=65a707cd&hm=4db9caa559f25d0d0b801f5b4d06404544cf205514706a1f4e6111ff7e6a7427&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1196949189553295380/photo_2023-05-03_21-05-41.jpg?ex=65b97ccd&is=65a707cd&hm=729554322e13440ea41802139f4130663546872eb85c8ce54eb443b5e66cf064&",
  "https://cdn.discordapp.com/attachments/904344676587417621/1196949189310029884/photo_2021-09-13_15-57-17.jpg?ex=65b97ccc&is=65a707cc&hm=5a352e8bf1703fa27f3b1653201cb6122975260b680840feb0dd1bc2ad3bad88&"
]

export const CarouselPhotos = () => {
  return (
    <Carousel>
      <CarouselContent className="flex gap-x-4">
        {photos.map((item, idx) => (
          <CarouselItem key={idx} className="p-0">
            <Image
              src={item}
              alt="Telegram Photos"
              width={1000}
              height={1000}
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}