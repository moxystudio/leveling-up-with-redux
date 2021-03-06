import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Bench from './bench/Bench';
import styles from './Table.css';

const Table = ({ className, guests, id, total, onClick }) => (
    <div className={ classNames(styles.container, { [className]: className }) }
        onClick={ onClick }>
        <div className={ styles.table }>
            <Bench
                verticalAlignment="top"
                horizontalAlignment="left"
                isTaken={ guests > 0 } />
            <Bench
                verticalAlignment="top"
                horizontalAlignment="right"
                isTaken={ guests > 1 } />
            <Bench
                verticalAlignment="bottom"
                horizontalAlignment="left"
                isTaken={ guests > 2 } />
            <Bench
                verticalAlignment="bottom"
                horizontalAlignment="right"
                isTaken={ guests > 3 } />
            <div className={ styles.id }>
                {id}
            </div>
            {
                !!total && total > 0 &&
                <div className={ styles.price }>
                    {total}€
                </div>
            }
        </div>
    </div>
);

Table.propTypes = {
    className: PropTypes.string,
    guests: PropTypes.number,
    id: PropTypes.number,
    total: PropTypes.number,
    onClick: PropTypes.func,
};

export default Table;
