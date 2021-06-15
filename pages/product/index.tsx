import { ProductCard } from "./components/productCard";

export default function Product(): JSX.Element {
  const displayCards = (): JSX.Element => {
    var cards = [];
    for (var i = 0; i < 10; i++) {
        cards.push(<ProductCard key={i} />);
    }
    return <div>{cards}</div>;
  }

  return (
    <>
      {displayCards()}
    </>
  );
}
