import React, {Fragment} from "react";
import {
  TableHeading,
  Table,
  Thead,
  Tbr,
  Tbody,
  Td,
  TableWrapper,
  ComponentContainer,
  Thr
} from "./TableComponentStyleElements";
import { useNavigate  } from 'react-router-dom';
import { Button } from "../../elements/ButtonElement";

function TableComponent({ tableData, tableHead, coinsType }) {

  const navigate = useNavigate();
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'})}
  return (
    <>
      {coinsType === "Top Coins" ? (
        <ComponentContainer>
          <TableHeading>{coinsType}</TableHeading>
          <TableWrapper top={true}>
            <Table>
              <Thead>
                <Thr>
                  {tableHead.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </Thr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj) => (
                  obj.isPromoted && <Tbr key={obj.id}  >
                    {Object.entries(obj)
                      .filter(([key, value]) => key !== 'isVoted' && key !== 'isPromoted')
                      .map(([key, value], index) => (
                      <Fragment key={index}>
                        {
                          value.type !== Button  ?
                        <Td onClick={() => {navigate('/details/' + obj.id); scrollToTop()}}>{value}</Td> :
                        <Td>
                          {value}
                          </Td>
                        }
                      </Fragment>
                    ))}
                  </Tbr>
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
                <Thr>
                  {tableHead.map((item, index ) => (
                    <th key={index}>{item}</th>
                  ))}
                </Thr>
              </Thead>
              <Tbody>
                {Object.values(tableData).map((obj) => (
                  <Tbr key={obj.id}>
                    {Object.entries(obj)
                      .filter(([key, value]) => key !== 'isVoted' && key !== 'isPromoted')
                      .map(([key, value], index) =>  (
                      <Fragment key={index}>
                         {
                           value && value.type !== Button  ?
                        <Td onClick={() => navigate('/details/' + obj.id)}>{value}</Td> :
                        <Td>{value}</Td>
                        }
                      </Fragment>
                    ))}
                  </Tbr>
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
