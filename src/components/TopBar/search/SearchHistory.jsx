import './searchHistory.css'
const SearchHistory = ({SearchHistory}) => {
  

  return (

    <div className="results-list">
       {
        SearchHistory.map((result, id) => {
               return <div key={id}> {result}</div>
           })
        }  
    </div>
  )
}

export default SearchHistory