import './TableContent.module.css'
    

const TableContent = (props) => {

    let tableContentElements = props.homeTableContent.map( 
        tableContentElement => (
            <tr>
                <th scope="row">{tableContentElement.id}</th>
                <td>{tableContentElement.name}</td>
                <td>{tableContentElement.definition}</td>
                <td>{tableContentElement.amount}</td>
                <td>{tableContentElement.created_at}</td>
            </tr>
        ))

    return (
        <div className='TableContent'>
            <table>
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Definition</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContentElements}
                </tbody>
            </table>
        </div>
    );
}

export default TableContent;