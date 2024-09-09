import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
//const CAT_ENDPOINT_CAT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;


function App() {
  
  const [fact,setFact] = useState("Lorem ipsum cat whatever")
  const [imgUrl, setImgUrl] = useState()

  useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      const {fact} = data
      setFact(fact)

      const firstWord = fact.split(' ')[0]
      console.log(firstWord) 

      setImgUrl(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)

    })

  


    /*
      async function getRandomFact (){
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      setFact(json.fact)}

      De esta manera tambien funcionaria pero tengo que practicar hacer fetch con async await.
    */

  },[])

  return (
    <>
    <main>
      <h1>App de Gatos</h1>
      <section>
     {fact && <p>{fact}</p>}
     {imgUrl && <img src={imgUrl} style={{
      width: '500px',
      height: '500px'
     }}/>}
     </section>
    </main>
      
    </>
  )
}

export default App
