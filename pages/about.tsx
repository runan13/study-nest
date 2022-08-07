import type { NextPage } from 'next'
import { useState } from 'react'

// Static Pre Rendering이 이루어지기 때문에
// browser의 자바스크립트가 비활성화 되어있거나 네트워크가 지연되어도 초기의 state값 및 component는 브라우저에 출력되어 보여진다
const About: NextPage = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  )
}

// React component가 default로 export 되어야 한다.
export default About
