import { useGlobalContext } from '../context'

export default function Home() {
  const appStateObj = useGlobalContext()
  console.log(appStateObj)
  return <div>Home</div>
}
