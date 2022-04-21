import React, {Fragment} from "react";
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
    <>
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
                {Object.values(tableData).map((obj) => (
                  <Tr key={obj.id} onClick={() => navigate('/details/' + obj.id)} >
                    {Object.values(obj).map((value, index) => (
                      <Fragment key={index}>
                        <Td>{value}</Td>
                      </Fragment>
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
                  {tableHead.map((item, index ) => (
                    <th key={index}>{item}</th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj, index) => (
                  <Tr key={index}>
                    {Object.values(obj).map((value, index) => (
                      <Fragment key={index}>
                        <Td>{value}</Td>
                      </Fragment>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableWrapper>
        </ComponentContainer>
      )}
    </>
  );
}

export default TableComponent;
