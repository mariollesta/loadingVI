import { Countdown } from '@components/Countdown'
import { ProgressBar } from '@components/ProgressBar'


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 gap-16">
      <Countdown />
      <ProgressBar />
    </div>
  )
}

export default App