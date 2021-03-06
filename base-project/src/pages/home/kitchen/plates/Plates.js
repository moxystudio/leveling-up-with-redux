import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cooking from './cooking/Cooking';

const cookingTimes = {
    beer: 0,
    juice: 300,
    pizza: 1000,
    hamburger: 600,
};

class Plates extends Component {
    render() {
        const { orders, className, onMealReady, ...rest } = this.props;

        if (!orders || !orders.length) {
            return null;
        }

        return (
            <div className={ className }>
                { orders.map((entry, index) =>
                    Object.keys(entry.items).map((plate) => (
                        <Cooking
                            key={ plate }
                            orderId={ index }
                            itemName={ plate }
                            itemQuantity={ entry.items[plate] }
                            itemCookingTime={ cookingTimes[plate] }
                            onFinishedCooking={ onMealReady }
                            { ...rest } />
                    ))
                )}
            </div>
        );
    }

    static propTypes = {
        className: PropTypes.string,
        orders: PropTypes.array.isRequired,
        onMealReady: PropTypes.func.isRequired,
    }
}

export default Plates;
