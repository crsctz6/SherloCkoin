import React from 'react'
import {TableHeading,Table,Thead,Tr,Tbody,Td,TableWrapper,ComponentContainer} from './TableComponentStyleElements'


function TableComponent({tableData, tableHead, coinsType}) {
  return (
    <div>
     {coinsType === 'Top Coins'? 
          <ComponentContainer>
          <TableHeading>
            {coinsType}
          </TableHeading>
          <TableWrapper top={true} >
          <Table>
              <Thead>
                <Tr>
                  {tableHead.map((item, index)=>(
                    <th key={index}>
                      {item}
                    </th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj,ind)=>(
                  <Tr key={ind}>
                    {Object.values(obj).map((value, ind2)=>(
                      <>
                        <Td key={ind2}> 
                            {value}
                        </Td>
                      </>
                    ))}
                  </Tr>
                ))}
              </Tbody>
          </Table>
        </TableWrapper>
        </ComponentContainer>
     
     :
        <ComponentContainer>
          <TableHeading>
            {coinsType}
          </TableHeading>
          <TableWrapper top={false} >
          <Table>
              <Thead>
                <Tr>
                  {tableHead.map((item, index)=>(
                    <th key={index}>
                      {item}
                    </th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj,ind)=>(
                  <Tr key={ind}>
                    {Object.values(obj).map((value, ind2)=>(
                      <>
                        <Td key={ind2}> 
                            {value} 
                        </Td>
                      </>
                    ))}
                  </Tr>
                ))}
              </Tbody>
          </Table>
        </TableWrapper>
        </ComponentContainer>}


   </div>
  )
}

export default TableComponent