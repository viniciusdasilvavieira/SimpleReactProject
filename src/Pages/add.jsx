import { useState } from 'react';
import '../style/body.css';

const Add = () => {
    //hooks para o formulários
    const [retakeTestNeed, setRetakeTestNeed]   = useState(true)
    const [retakeTestScore, setRetakeTestScore] = useState(0)
    const [teacherName, setTeacherName]         = useState('')
    const [studentName, setStudentName]         = useState('')
    const [score1, setScore1]                   = useState(0)
    const [score2, setScore2]                   = useState(0)
    const [score3, setScore3]                   = useState(0) 

    const [participant1, setParticipant1]           = useState('') 
    const [participant2, setParticipant2]           = useState('') 
    const [participant3, setParticipant3]           = useState('') 
    const [participantScore1, setParticipantScore1] = useState(0) 
    const [participantScore2, setParticipantScore2] = useState(0) 
    const [participantScore3, setParticipantScore3] = useState(0) 

    const [studentsAmount, setStudentsAmount]   = useState(0)
    const [_class, set_class] = useState(
        {
            teacher: null,
            students: [],
            competition: {
                winner: null,
                participants: [
                    { name: null, score: null },
                    { name: null, score: null },
                    { name: null, score: null }
                ]
            }
        } 
    )

    const numericOptions =  <>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            </>

    function changeRetakeTestNeed(event)    { setRetakeTestNeed(event.target.value) }
    function changeRetakeTestScore(event)   { setRetakeTestScore(event.target.value) }
    function changeTeacherName(event)       { setTeacherName(event.target.value) }
    function changeStudentName(event)       { setStudentName(event.target.value) }
    function changeScore1(event)            { setScore1(event.target.value) }
    function changeScore2(event)            { setScore2(event.target.value) }
    function changeScore3(event)            { setScore3(event.target.value) }

    function changeParicipant1(event)       { setParticipant1(event.target.value) }
    function changeParicipant2(event)       { setParticipant2(event.target.value) }
    function changeParicipant3(event)       { setParticipant3(event.target.value) }
    function changeParicipantScore1(event)  { setParticipantScore1(event.target.value) }
    function changeParicipantScore2(event)  { setParticipantScore2(event.target.value) }
    function changeParicipantScore3(event)  { setParticipantScore3(event.target.value) }

    function addStudent(){
        let student = {
            name : studentName,
            scores : [score1, score2, score3],
            retake_test : { necessity: retakeTestNeed, score : retakeTestScore}
        }         
        if (_class.students.length < 20){
            _class.students.push(student)
            setStudentsAmount(_class.students.length)
        }
        else {alert('quantidade máxima de alunos inseridos!')}
    }
    function addTeacher(){ 
        _class.teacher = teacherName
        alert('Professor '+teacherName+' adicionado com sucesso!')
    }
    /* método que monta um .json que hipoteticamente oferece
    a informação necessária para a rota POST da API */
    function addClass(){
        // send POST here

        /*aqui seriam colocadas as verificações condicionais para a adição de classe
        e após validadas o POST seria montado com axios, mas para exemplo eu apenas
        coloquei um simples "se existe 20 alunos, pode fazer inserção" */
        if ( _class.students.length > 19){
            alert('Classe inserida com sucesso!')
        }
    }

    // retorno principal
    return (
    <>
        <table className='detailed_table'>
            <tr>
                <td>Professor</td>
            </tr>
            <tr>
                <td>Nome</td>
                <td>
                    <input onChange={changeTeacherName}
                    type="text" style={{width:100}}></input>
                </td>
                <td>
                    <div className='operationButton' onClick={e => addTeacher()}>
                        Adicionar professor
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>Aluno</td>
            </tr>
            <tr>            
                <td>Nome</td>
                <td>
                    <input  onChange={changeStudentName}
                    type="text" style={{width:100}}></input>
                </td>
                <td>Nota 1</td>
                <td>
                    <select onChange={changeScore1}>
                        {numericOptions}
                    </select>
                </td>
                <td>Nota 2</td>
                <td>
                    <select onChange={changeScore2}>
                        {numericOptions}
                    </select>
                </td>
                <td>Nota 3</td>
                <td>
                    <select onChange={changeScore3}>
                        {numericOptions}
                    </select>
                </td>                
            </tr>
            <tr>
                <td></td>
                <td>
                    Número de estudantes adicionados (precisa 20): {studentsAmount}
                </td>
                <td>Prova de recuperação</td>
                <td>
                    <select onChange={changeRetakeTestNeed}>
                        <option value={true}>Necessária</option>
                        <option value={false}>Desnecessária</option>  
                    </select>
                </td> 
                <td>Nota de recuperação</td>
                <td>
                    <select onChange={changeRetakeTestScore}>
                        {numericOptions}
                    </select>
                </td>
                {/* Assumindo que a situação do aluno seria calculada no back-end,
                portanto não há input para situação no front*/}
                <td>
                    <div className='operationButton' onClick={e => addStudent()}>
                        Adicionar Aluno
                    </div>
                </td>
            </tr>
            <br/>
            <tr>
                <td>Competição</td>
                <td>Participantes</td>
            </tr>
            <tr>
            <td></td>
                <td>
                    <input onChange={changeParicipant1}
                    type='text' style={{width:100}}></input>
                </td>
                <td>Nota</td>
                <td>
                    <select onChange={changeParicipantScore1}>
                        {numericOptions}
                    </select>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input onChange={changeParicipant2}
                    type='text' style={{width:100}}></input>
                </td>
                <td>Nota</td>
                <td>
                    <select onChange={changeParicipantScore2}>
                        {numericOptions}
                    </select>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input onChange={changeParicipant3}
                    type='text' style={{width:100}}></input>
                </td>
                <td>Nota</td>
                <td>
                <select onChange={changeParicipantScore3}>
                        {numericOptions}
                    </select>
                </td>
            </tr>
            {/* Assumindo que vencedor seria calculado pelo back-end */}
            <tr>
                <td>
                    <div className='operationButton' onClick={e => addClass()}>
                        Adicionar classe
                    </div>
                </td>
            </tr>
        </table>
    </>   
    );
}  
export default Add;
  