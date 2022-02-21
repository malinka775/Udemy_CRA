import React from "react";

import './App.css';

import Info from '../Info/Info';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeesAddForm from '../EmployeesAddForm/EmployeesAddForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jonh R.' , salary: 900, increase: false, rise: true, id: 1 },
                {name: 'Alina K.' , salary: 1500, increase: false, rise: true, id: 2 },
                {name: 'Ivan P.' , salary: 2000, increase: false, rise: false, id: 3 },
            ],
            term: "",
            filter: "all",
            maxId: 4
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((elem) => (elem.id !== id))
            }
        })
    }
    addItem = (name, salary) => {
        this.setState(({data, maxId}) => {
            const newArr = [...data, {name, salary, increase: false, rise: false, id: maxId}];
            const newMaxId = maxId + 1;
            return {
                data: newArr,
                maxId: newMaxId
            }
        })
    }

    onToggleProp =(id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return{...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term === "") {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterData = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(item => item.rise);
            case "higherSalary":
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterData(this.searchEmployee(data, term), filter);

        return (
            <div className='app'>
                <Info totalNumber={data.length} increasedPaymentNumber= {data.filter(item => item.increase === true).length}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <Filter filter={filter} onClick={this.onFilterSelect}/>
                </div>
                <EmployeesList
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    data={visibleData}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}
export default App