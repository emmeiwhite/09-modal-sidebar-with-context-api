import { useGlobalContext } from '../context'

export default function Home() {
  const value = useGlobalContext()
  console.log(value)
  return (
    <div>
      <h1>I am the Home Component</h1>
      <p>Let's test context !</p>
    </div>
  )
}
