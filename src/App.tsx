import { useEffect, useState } from 'react';
import './App.css';

import { useAppSelector, useAppDispatch } from './hooks'
import { fetchPosts } from './store/industrySlice';
import Table from './components/table';

function App() {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const dataCompany = useAppSelector((state) => state.industrySlice.company) || undefined
  const dispatch = useAppDispatch()
  const myToken = import.meta.env.VITE_IEX_TOKEN as string;
  const url =`https://api.iex.cloud/v1/data/CORE/COMPANY?last=50&token=${myToken}`
  useEffect(() => {
    dispatch(fetchPosts(url))
  },[dispatch])
    
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = dataCompany ? Math.min(startIndex + itemsPerPage, dataCompany.length) : 0;

  return (
    <div>
      <h1 > Page {currentPage}</h1>
      {dataCompany ? (
        <Table dataCompany={dataCompany} startIndex={startIndex} endIndex={endIndex}/>
      ) : (
        <div>Loading...</div>
      )}
      <div className="pagination">
        <button
          className="glow-on-hover"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>prev</span>
        </button>
        <button
          className="glow-on-hover"
          onClick={() => setCurrentPage(currentPage + 1)}
          
          disabled={
            dataCompany && currentPage === Math.ceil(dataCompany.length / itemsPerPage)
          }
        >
          <span>next</span>
        </button>
      </div>
    </div>
  );
}


export default App;
