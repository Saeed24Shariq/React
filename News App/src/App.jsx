import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDebounce } from "use-debounce"


function App() {

  let [articles, setArticles] = useState([]);

  let [news, setNews] = useState({});
  let [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  let flag = useRef(false);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=react&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(e => console.log(e))
    if (value == "") {
      flag.current = false;
    }
    else {
      setArticles(news.articles.filter((item) => item.source.name.toUpperCase() == value.toUpperCase()))
      flag.current = true;
    }
    console.log(value, flag.current, articles)
  }, [value])


  return (
    <>
      <div className='flex flex-col justify-center p-5 bg-[#212121]'>
        <div className='flex justify-center items-center my-[20px]'>
          <label htmlFor="search" className='text-white mx-2 text-xl'>Search: </label>
          <input onChange={(e) => setSearch(e.target.value)} type="text" id='search' className='border-2 rounded-full p-2 border-white text-white focus:outline-white text-lg' />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
          {
            (flag.current == false) ?
              (news.status === "ok") ?
                news.articles.map((item, index) => {
                  return (
                    <div key={index} className='flex flex-col justify-center items-between rounded-2xl border-1 border-white p-4'>
                      <div>
                        <img className='h-[400px]' src={item.urlToImage} alt="" />
                      </div>
                      <div className='flex flex-col'>
                        <h1 className='text-white font-bold text-2xl'>{item.title}</h1>
                        <p className='text-white'>{item.description}</p>
                        <a href={item.url} className='text-white font-bold underline text-xl'>{item.source.name}</a>
                      </div>
                    </div>
                  )
                })
                :
                "Result Not Found!!!!"
              :
              (articles.length > 0) ?
                articles.map((item, index) => {
                return (
                  <div key={index} className='flex flex-col justify-center items-between rounded-2xl border-1 border-white p-4'>
                    <div>
                      <img className='h-[400px]' src={item.urlToImage} alt="" />
                    </div>
                    <div className='flex flex-col'>
                      <h1 className='text-white font-bold text-2xl'>{item.title}</h1>
                      <p className='text-white'>{item.description}</p>
                      <a href={item.url} className='text-white font-bold underline text-xl'>{item.source.name}</a>
                    </div>
                  </div>
                )
              })
            :
            "Result not Found!!!"
          }
        </div>
      </div>
    </>
  )
}

export default App
