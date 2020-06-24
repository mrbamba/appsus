export default{
    prop:['email'],
    template:
        `
        <tr>
            <td>
                <input type="checkbox" >
            </td>
            <td>
                {{email.starred}}
            </td>
            <td>
                {{email.from}}
            </td>
            <td>
                {{email.subject}}
            </td>
            <td>
                {{email.timestamp}}
            </td>
        </tr>
        `
    
}