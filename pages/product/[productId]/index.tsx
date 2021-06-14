import { useRouter } from 'next/router'

const ProducDetails = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>ProductID: {id}</h1>
    </>
  )
}

export default ProducDetails