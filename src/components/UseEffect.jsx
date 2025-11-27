import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    // const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [count3, setCount3] = useState(0);
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false); // <-- added loading state

    async function fetchData() {
        
        setLoading(true)
        let response = await axios.get(
            "https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee"
        )
        setEmployee(response.data)
        setTimeout(() => {
            setLoading(false)
        }, 300);
        console.log(response.data)
    }

    useEffect(() => {
        console.log("UseEffect called");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchData()
    }, []);

    async function postEmployee() {
        
        let response = await axios.put(
            "https://6719c3737fc4c5ff8f4e65bb.mockapi.io/api/v1/Employee/30",
            {
                employeeFirstName: "Modesta",
                employeeMiddleName: "Addison",
                employeeLastName: "Schiller-Doyle",
                employeePhoneNumber: "(693) 965-3124 x2604",
                employeeEmail: "Marjorie34@hotmail.com",
                employeeCompanyName: "Gerlach, Anderson and Pouros",
                employeeImage: "https://avatars.githubusercontent.com/u/51813665",
                employeeGender: "female",
                employeeTitle: "Human Factors Agent",
                employeeCompanyLocation: "Research",
                employeeSalary: "646.47",
                employeeManager: "Rufus Braun",
                employeeDepartment: "Beauty",
                id: "75",
            }
        );
        console.log(response);
        fetchData();
    }

    return (
        <div>
            <h1>Employees</h1>

            {loading ? (
                <p>Loading ...</p>
            ) : (
                employee.map((emp) => (
                    <div key={emp.id}>
                        {emp.id} - {emp.employeeFirstName}
                    </div>
                ))
            )}

            <button onClick={postEmployee}>Add Employee</button>

            {/* ------------ YOUR COMMENTED PART NOT REMOVED ------------ */}
             { /*
            <h1>{count1}</h1>
            <h1>{count2}</h1>
            <h1>{count3}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Increament Count1</button>
            <button onClick={() => setCount2(count2 + 1)}>Increament Count2</button>
            <button onClick={() => setCount3(count3 + 1)}>Increament Count3</button>
            */  }
        </div>
    )
}

export default UseEffect;
