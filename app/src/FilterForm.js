import { data } from './data.js';
import React from 'react';
import {  FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import _ from 'lodash';

export const FilterForm = (props) => {
    let headerNames = Object.keys(...data);

    return(
    <Col sm={4}>
        <form>
            <FormGroup>
                <FormControl 
                    type="text" 
                    name="filter" 
                    placeholder="enter filter term" 
                    value={props.inputFilterValue} 
                    onChange={(e) => props.handleFilter(e, props.selectFilterType) } 
         
                />
            
                <ControlLabel>Change Filter Option</ControlLabel>
                <FormControl componentClass="select" onChange={props.handleFilterType}>

                    {headerNames.map((item, id) => {
                        let formattedHeading = _.startCase(item);
                        if ((item !== 'salesRevenue') && (item !== 'quantitySold')){
                            return(
                                <option key={id} value={item}>{formattedHeading}</option>)
                        }
                    })}

                </FormControl>
            </FormGroup>
        </form>
    </Col>
)}