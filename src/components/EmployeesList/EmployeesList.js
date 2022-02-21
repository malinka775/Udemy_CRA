
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
import './EmployeesList.css'


const EmployeesList = ({onDelete, data, onToggleProp}) => {

  const elements = data.map(item => {
    const {id, ...restProps} = item
    return (
      <EmployeesListItem
          key={id}
          {...restProps}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}/>
    )
  })

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  );
}

export default EmployeesList;