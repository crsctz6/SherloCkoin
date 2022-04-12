import styled from "styled-components";
import {Backgrounds, Borders,FontSize, FontColors,FontWeights,FontsFamilies} from '../GlobalStyleConsts'

export const ComponentContainer= styled.div`
//borders
border:2px solid;
border-image:${Borders.orange};
border-image-slice: 1;

//positioning and spacing
width: fit-content;
white-space:nowrap; 

@media screen and (max-width:950px){
width:auto;
overflow-x:scroll;

}

`
export const TableWrapper= styled.div`

`

export const Table = styled.table`
//colors
background: ${Backgrounds.table};
color:${FontColors.white};
//borders
border-collapse:collapse;
//font
font-size:${FontSize.text};
font-family:${FontsFamilies.rest}
font-weight:${FontWeights.medium}
//positioning and spacing
width:100%;
table-layout: auto;

`

export const Thead = styled.thead`
`

export const Tr = styled.tr`
border-bottom: 1px solid ${Borders.grey};
height:50px;
    th:nth-child(3) {
        color: orange;
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        z-index:15;
        background:${Backgrounds.table};
        
    }
    Td:nth-child(3) {
        color: orange;
        position: -webkit-sticky;
        position: sticky;
        left: 0px;
        z-index:15;
        background:${Backgrounds.table};
        
    }

`
export const Tbody = styled.tbody`
`
export const Td = styled.td`
padding: 10px 4vw;



`
