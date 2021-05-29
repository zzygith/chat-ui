import React from 'react'
import DropDown from "."
import Icon from '../Icon';
import Paragraph from '../Paragraph';
import { DropDownItem } from './style';
import {ReactComponent as Options} from '../../assests/icons/options.svg'


export default {
    title: "DropDown",
    component: DropDown
};

const dropdownContent = (
    <>
    <DropDownItem>
        <Paragraph>Personal Information</Paragraph>
    </DropDownItem>
    <DropDownItem>
        <Paragraph type="danger" >Mute</Paragraph>
    </DropDownItem>
    </>
);

export const Defualt = () =>
    <div style={{display:"flex", justifyContent:"space-between", width:"50%"}} >
        <DropDown content={dropdownContent}>
            <Icon opacity={0.3} icon={Options} />
        </DropDown>
    </div>
    


