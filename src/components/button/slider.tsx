import React from 'react';

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            &larr; {/* Стрелка "назад" */}
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            &rarr; {/* Стрелка "Вперед" */}
        </button>
    );
};

export { CustomPrevArrow, CustomNextArrow };
