import React, { useEffect, useState } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

import sortde from './../../img/sortde.png';
import sortd from './../../img/sortd.png';
import sorta from './../../img/sorta.png';
import { Container } from 'react-bootstrap';
import loadingGif from './../../img/tableLoading.gif';

const DataTable  = ({ columns, data, loading }) => {
    const [tdata , setTdata] = useState(data);
    console.log("new data => " , data);
    useEffect(()=>{console.log(data)},[data]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          initialState: {pageIndex : 0 , pageSize: 50 }
        },
        useSortBy,
        usePagination
      )
      return (
        <>
            <Container className='tableWrapper'>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                        {column.isSorted
                          ? column.isSortedDesc
                            ? <img src={sortd}/>
                            : <img src={sorta}/>
                          : <img src={sortde}/>}
                      </th>  
                    ))}
                    </tr>
                ))}
                
                </thead>
                {loading ? (<div className='tableLoading'> <img src={loadingGif} /> </div>) : (
                    <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )})}
                    </tbody>
                )}
                
            </table>
            </Container>
            {data.length > 0 ? !loading ? (
                <div className="pagination">
                    
                    <div className={`pervBtn ${!canPreviousPage ? 'disable' : ""}`} onClick={() => {previousPage(); window.scroll(0 , 0)}} ></div>

                    {pageIndex === 0 && 
                        <div className='pageNumberWrapper'>
                            {[1 , 2 , 3].map((index) => {
                                if(index <= pageCount){
                                
                                    return(
                                        <div className={`pageNumber ${index === 1 ? 'active' : ''}`} onClick={()=>{gotoPage(index-1); window.scroll(0 , 0) }}>
                                            {index}
                                        </div>
                                    )
                                }   
                                
                            })}
                        </div>
                    }

                {pageIndex > 0 && 
                        <div className='pageNumberWrapper'>
                            {[pageIndex-1 , pageIndex , pageIndex+1].map((index) => {
                                if(index <= pageCount-1){
                                    return(
                                        <div className={`pageNumber ${index === pageIndex ? 'active' : ''}`} onClick={()=>{gotoPage(index); window.scroll(0 , 0)}}>
                                            {index+1}
                                        </div>
                                    )
                                }
                                
                            })}
                        </div>
                }
                    
                    <div className={`nextBtn ${!canNextPage ? 'disable' : ""}`} onClick={() => {nextPage(); window.scroll(0 , 0)}} ></div>                
                    
                </div>
            ):(<></>) : (
                <div style={{marginTop: '50px' , textAlign: 'center' , fontWeight:'bold'}}> No Record Avaliable  </div>
            )}
        </>
      )
}

export default DataTable;