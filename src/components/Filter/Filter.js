import "./Filter.css"

const Filter = ({filter, onClick}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: ' На повышение'},
        {name: 'higherSalary', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light"
        return (
            <button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => onClick(name)}>
                {label}
            </button>
        )
    })
  return (
    <div className='btn-group' >
        {buttons}
    </div>
  );
}

export default Filter;