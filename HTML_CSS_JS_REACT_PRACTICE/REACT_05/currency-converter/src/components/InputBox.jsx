import { React, useId } from 'react'

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,
        className = '',
    }
) {
    const amountInputId = useId()
    return (
        <div className={``}>
            <div className="w-1/2 inline-block">
                <label htmlFor={amountInputId} className="text-black mb-2 font-extrabold">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="border-2 border-blue-400 rounded-6"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 inline-block">
                <p className="">Currency Type</p>
                <select
                    className="" value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) =>
                        <option key={currency} value={currency}>
                            {currency}
                        </option>)
                    }

                </select>
            </div>
        </div>
    );
}

export default InputBox;