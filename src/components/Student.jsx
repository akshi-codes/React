import React, { useState } from "react";

const Student = () => {
    const [theme, setTheme] = useState(false);
    const [companies, setCompanies] = useState(["A", "B", "C"]);
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);   // <-- new state

    const handleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    };

    const increaseCount = () => {
        setCount((c) => c + Number(inputValue));       // <-- increase by input value
    };

    const decreaseCount = () => {
        if (count - Number(inputValue) >= 0) {
            setCount((c) => c - Number(inputValue));   // <-- decrease by input value
        }
    };

    const reset = () => {
        setCount(0);
        setInputValue(0);
    };

    const handleCompanies = () => {
        setCompanies([...companies, "Netflix"]);
    };

    const removeCompany = (companyToRemove) => {
        setCompanies(companies.filter((comp) => comp !== companyToRemove));
    };

    return (
        <>
            <h1>Companies</h1>
            {companies.map((company, index) => (
                <div key={index}>
                    {`${index + 1} - ${company}`}
                    <button onClick={() => removeCompany(company)}>Remove</button>
                </div>
            ))}

            <h1>The count is {count}</h1>

            {/* 🔹 Input to take number from user */}
            <input
                type="number"
                value={inputValue}
                placeholder="Enter value"
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleTheme}>Toggle Theme</button>
            <button onClick={handleCompanies}>Add Company</button>

            <div>The State of the Theme Is {theme.toString()}</div>
        </>
    );
};

export default Student;

// import React, { useState } from "react";

// const Student = () => {
//     //const a  = 10
//     //const [initialValue, functionToChangeValue] = useState()
//     const [theme, setTheme] = useState(false)
//     //const [theme_] = useState(false)
//     //const theme__ = false]
//     const [companies, setCompanies] = useState(["A ", "B ", "C "])
    
//     const [count, setCount] = useState(0)

//     const handleTheme = () => {
//         setTheme((prevTheme) => !prevTheme)
//     }

//     const increaseCount = () => {
//         setCount((count) => count + 1)
//     }
//     const decreaseCount = () => {
//         if(count > 0)
//         {
//             setCount((count) => count - 1)
//         }
//     }
//     const reset = () => {
//         setCount(0)
//     }


//     const handleCompanies = () => {
//         setCompanies(() => [ ... companies, "Netflix"])
//     }
//     const removeCompany = (companyToRemove) => {
//         setCompanies(companies. filter((comp) => comp !== companyToRemove))
//     }
//     return(
//         <>
//             <h1>Compaines</h1>
//             {companies. join(", ")}
//             {companies.map((company, index) => {
//                 return <div key={index}>
//                     {`${index + 1} - ${company}`}

//                     <button onClick={() => removeCompany(company)}>Remove</button>
 
//              </div>
//             })}
//             <h1>The count is {count}</h1>
//             <button onClick={increaseCount}>Incrementor</button>
//             <button onClick={decreaseCount}>Decrementor</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={handleTheme}>Toggle to change</button>
//             <button onClick={handleCompanies}>Add Company</button>
//             <button onClick={() => removeCompany("A")}>Remove Company</button>
//             <div>The State of the Theme Is {theme.toString()}</div>
//         </>
//      )
// }

// export default Student