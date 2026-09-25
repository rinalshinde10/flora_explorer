import "./Select.css";

function Select({ value, onChange, options, placeholder }) {
    
    // Remove duplicate options
    const uniqueOptions = [...new Set(options)];

    return (
        <select
            className="select-field"
            value={value}
            onChange={onChange}
        >
            <option value="">
                {placeholder}
            </option>

            {uniqueOptions.map((option, index) => {

                // Empty option skip
                if (!option) {
                    return null;
                }

                return (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                );
            })}

        </select>
    );
}

export default Select;