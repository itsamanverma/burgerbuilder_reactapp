import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return  <li key ={igKey}>
                    <span style = {{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
        });

    return (
        <Wrapper>
            <h3>Your Order!</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wrapper>
    );
};

export default  orderSummary;