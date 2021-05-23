import styled, { css } from 'styled-components'
import CaretDown from "../../assests/icons/caret_down.svg"

const StyledSelect = styled.select`
    appearance:none;
    background-image: url(${CaretDown});
    background-repeat:no-repeat;
    background-position: right center;
    background-color: transparent;
    padding-right:14px;   //padding will put up box, so backimage will move
    border:none;
    outline:none;
    font-size:${props => props.theme.normal};
    color:${props=>props.theme.grayDark}


`;
export default StyledSelect;