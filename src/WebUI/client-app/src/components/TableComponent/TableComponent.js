import React from "react";
import {
  TableHeading,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  TableWrapper,
  ComponentContainer,
} from "./TableComponentStyleElements";
import { useNavigate  } from 'react-router-dom';

function TableComponent({ tableData, tableHead, coinsType }) {

  const navigate = useNavigate();
  return (
    <div>
      {coinsType === "Top Coins" ? (
        <ComponentContainer>
          <TableHeading>{coinsType}</TableHeading>
          <TableWrapper top={true}>
            <Table>
              <Thead>
                <Tr>
                  {tableHead.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj, index) => (
                  <Tr key={index} onClick={() => navigate('/details/' + obj.id)} >
                    {Object.values(obj).map((value, index) => (
                      <>
                        <Td key={index}>{value}</Td>
                      </>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableWrapper>
        </ComponentContainer>
      ) : (
        <ComponentContainer>
          <TableHeading>{coinsType}</TableHeading>
          <TableWrapper top={false}>
            <Table>
              <Thead>
                <Tr>
                  {tableHead.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj, index) => (
                  <Tr key={index}>
                    {Object.values(obj).map((value, index) => (
                      <>
                        <Td key={index}>{value}</Td>
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
  );
}

export default TableComponent;
