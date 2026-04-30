import { ReactElement } from "react";

// import ImageLink from "@/components/image-link";
// import { useAppSelector } from "@/services/hooks";
// import hydrateCardFromLocalStorage from "@/shared/utils/hydrateCardFromLocalStorage";

const CardsHeroui = (): ReactElement => {
  // const cards = useAppSelector((state) => state.items.cards);

  // const hydratedCards = cards.map((card) => ({
  //   ...card,
  //   ...hydrateCardFromLocalStorage(card),
  // }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
      hydratedCards
      {/*{hydratedCards.map((card) => (*/}
      {/*  <Card key={card.id}>*/}
      {/*    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">*/}
      {/*      <h4 className="font-bold text-large">{card.name}</h4>*/}
      {/*      <small className="text-default-500">{card.likes} Likes</small>*/}
      {/*      <ImageLink imageUrl={card.image} />*/}
      {/*    </CardHeader>*/}
      {/*    <CardBody className="overflow-visible py-2 h-60">*/}
      {/*      <Image*/}
      {/*        alt="Card background"*/}
      {/*        className="object-cover rounded-xl w-full h-full aspect-[3/2]"*/}
      {/*        src={card.image}*/}
      {/*      />*/}
      {/*    </CardBody>*/}
      {/*  </Card>*/}
      {/*))}*/}
    </div>
  );
};
export default CardsHeroui;
