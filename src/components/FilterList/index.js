import React from 'react'
import PropTypes from 'prop-types'
import StyledFilterList from './style'
import Input from '../Input'
import Filter from '../Filter'
import Select from '../Select'
import Option from '../Option'
import Button from '../Button'
import Icon from '../Icon'
import { ReactComponent as Plus } from "../../assests/icons/plus.svg";

function FilterList({children, options,actionLabel, filterLabel="Sort By", ...rest }) {
    return (
        <StyledFilterList {...rest} >
            <Input.Search />
            <Filter styled={{ padding: "20px 0" }}>
                {options && (
                <Filter.Filters label={filterLabel}>
                    <Select>
                        <Option>Latest First</Option>
                        <Option>Online First</Option>
                    </Select>
                </Filter.Filters>)}
                
                {actionLabel && (
                <Filter.Action label={actionLabel}>
                    <Button>
                        <Icon icon={Plus} width={12} height={12} color="white" />
                    </Button>
                </Filter.Action>)}
            </Filter>


           {children}
        </StyledFilterList>
    )
}

FilterList.propTypes = {
    options: PropTypes.any,
    filterLabel: PropTypes.string,
    actionLabel: PropTypes.string
}

export default FilterList

