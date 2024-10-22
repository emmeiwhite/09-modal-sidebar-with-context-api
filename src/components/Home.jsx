import { useGlobalContext } from '../context'

export default function Home() {
  const { test, updateTestString } = useGlobalContext()

  return (
    <div>
      <h3>Let's test context !</h3>
      <h4>{test}</h4>

      <button
        className="btn"
        onClick={updateTestString}
      >
        Update String
      </button>
    </div>
  )
}
