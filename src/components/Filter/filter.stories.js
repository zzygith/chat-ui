import React from 'react'
import Filter from "."
import Select from '../Select/index';
import Option from "../Option/index";
import Button from "../Button/index";
import Icon from "../Icon/index";
import { ReactComponent as Plus } from "../../assests/icons/plus.svg";


export default {
    title: "Filter",
    component: Filter
};


export const Defua = () => (
<Filter>
        <Filter.Filters label="Sort By">
            <Select>
                <Option>Latest First</Option>
                <Option>Online First</Option>
            </Select>
        </Filter.Filters>

        <Filter.Action label="Add New">
            <Button>
                <Icon icon={Plus} width={12} height={12} color="white" />
            </Button>
        </Filter.Action>
</Filter>
)




