import { useState, useEffect } from 'react'
import GamePlace from './components/gamePlace'
import GameHistory from './components/gameHistory'


// const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [0, 0, 0];
// const savedP1Scores = getStorage('p1Scores')
// const savedP2Scores = getStorage('p2Scores')

function App() {
  const [p1Scores, setP1Scores] = useState([0, 0, 0])
  const [p2Scores, setP2Scores] = useState([0, 0, 0])

  useEffect(() => {
    const getStorage = (key) => JSON.parse(localStorage.getItem(key));
    const saveInfo1 = getStorage('p1Scores')
    const saveInfo2 = getStorage('p2Scores')

    if (saveInfo1) setP1Scores(saveInfo1)
    if (saveInfo2) setP1Scores(saveInfo2)
  }, [])

  useEffect(() => {

    if (p1Scores.some(num => num !== 0)) {
      localStorage.setItem('p1Scores', JSON.stringify(p1Scores))
    }
    // else {
    //   console.log(p1Scores);
    // }

  }, [p1Scores])

  useEffect(() => {
    localStorage.setItem('p2Scores', JSON.stringify(p2Scores))
  }, [p2Scores])

  return (
    <div className='w-[80%] min-w-170    max-w-200 mx-auto pt-20 grid gap-4'>
      {/* <button style={{ zIndex: 2, position: 'relative' }} onClick={e => setP1Scores([3, 4, 5])}>olaaaaaaaaaaa</button>
      <button style={{ zIndex: 2, position: 'relative' }} onClick={e => console.log(p1Scores)}>ola</button>
      <h1>{p1Scores}</h1> */}
      <GamePlace
        p1Scores={p1Scores}
        setP1Scores={setP1Scores}
        p2Scores={p2Scores}
        setP2Scores={setP2Scores}
      />
      <GameHistory
        p1Scores={p1Scores}
        p2Scores={p2Scores}
      />
    </div>
  )
}
export default App