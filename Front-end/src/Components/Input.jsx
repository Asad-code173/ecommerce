import React from 'react';

const Input = React.forwardRef(function Input({
    type = "text",
    className = "",
    ...props
}, ref) {
    return (
        <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
        />
    );
});

export default Input;
