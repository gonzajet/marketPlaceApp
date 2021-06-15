import { useRouter } from "next/router";

export default function Product(): JSX.Element {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <div>
        <h1>INDEX PRODUCT ID: {productId}</h1>
      </div>
    </>
  );
}
