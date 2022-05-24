import { useState } from 'react';
import '../style/body.css';

const Delete = () => {
    const [inputId, setInputId] = useState('');

    function changeinputId(event) { setInputId(event.target.value) }

    function deleteClass(){
        let id = inputId
        if (id != ''){
            id = parseInt(id)
            if (id > 0) alert('Classe '+id+' removida com sucesso!')
            else alert('Valor precisa ser maior que 0')
        } 
    }

    //retorno principal
    return (
    <>
        <table className='detailed_table'>
            <tr>
                <td>ID da classe</td>
                <td>
                    <input type="number" onChange={changeinputId}
                    style={{width:40}}></input>
                </td>
                <td>
                    <div className='operationButton' onClick={e => deleteClass()}>
                       Remover
                    </div>
                </td>
            </tr>
        </table>
    </>   
    );
}  
export default Delete;
  