import Link from "next/link"
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/ui/3d-card";
import { Title } from "@/ui/title";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { Typography } from "@/ui/typography";
import { useToast } from "@/ui/use-toast";

const supportMethods = [
  {
    type: "TON",
    value: "UQA5pdpXT23l2R-3RdbF4cfsQ57_qI5nHwJYlljgWX_15vIb",
    image: "images/support/ton.jpg",
    link: false
  },
  {
    type: "YooMoney",
    value: "https://yoomoney.ru/fundraise/118ARQKU2N4.240304",
    image: "images/support/yoomoney.png",
    link: true
  },
  // {
  //   type: "ETH",
  //   value: "",
  //   image: "images/support/eth.png",
  //   link: false
  // }
]

export const SupportSection = () => {
  const { toast } = useToast();
  
  const handleCopyboard = (value: string) => {
    navigator.clipboard.writeText(value);

    toast({
      title: "Адрес скопирован"
    })
  }
  
  return (
    <div className="flex flex-col min-h-screen pt-24 w-full">
      <Title titleBody="Ниже способы, как можно помочь материально" />
      <div className="flex flex-wrap gap-x-6">
        {supportMethods.map((item, idx) => (
          <CardContainer key={idx}>
            <CardBody className={`${item.type === "TON" && "border border-deluge-600"} bg-neutral-600/40 backdrop-blur-md backdrop-filter rounded-xl h-[86%]`}>
              <Image
                src={`/${item.image}`}
                loading="lazy"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-[200px]"
                alt={item.type}
              />
              <CardItem className="p-4">
                {item.type}
              </CardItem>
              <CardItem className="p-4 text-deluge-300 font-bold hover:brightness-150">
                {item.link ? (
                  <Link href={item.value} target="_blank">
                    Помочь
                  </Link>
                ) : (
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Typography
                        onClick={() => handleCopyboard(item.value)}
                        className="text-left"
                      >
                        {item.value}
                      </Typography>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Typography>
                        Кликни, чтобы скопировать
                      </Typography>
                    </TooltipContent>
                  </Tooltip>
                )}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  )
}