import React from 'react'
import {Table,Thead,Tr,Tbody,Td,TableWrapper,ComponentContainer} from './TableComponentStyleElements'

function TableComponent({promotedTableData, tableHead}) {
  return (
    <div>
{promotedTableData.length >0 &&(
  <ComponentContainer>
    <TableWrapper>
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
          {Object.values(promotedTableData).map((obj,ind)=>(
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
    )}

   </div>
  )
}

export default TableComponent