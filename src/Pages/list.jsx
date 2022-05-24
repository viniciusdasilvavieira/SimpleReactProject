import { Link } from 'react-router-dom';
import '../style/body.css';

const List = () => {

    /*simulação do .Json de um retorno get que exibe todos os resultados de todas as salas

    eu poderia supor mais de uma rota get, por exemplo uma que retorna as salas sem detalhes
    e uma outra que especificando o id da sala, trás os resultados, mas como o back-end não
    existe resolvi deixar só uma rota get com tudo, como mencionado
    */
    const classes = [
        {
            teacher:'João',
            students:[
                {name: 'Maria', scores:[8,4,7], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Bianca', scores:[7,4,6], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Alex', scores:[3,6,5], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Ricardo', scores:[7,4,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Barbara', scores:[6,5,8], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Helena', scores:[6,5,6], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Francisca', scores:[8,4,3], retake_test: {necessity:true, score:7}, approved: true},
                {name: 'Mayara', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Adalberto', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Renan', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Augusto', scores:[2,3,6], retake_test: {necessity:true, score:4}, approved: false},
                {name: 'Mila', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Fábia', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Marília', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Luciana', scores:[2,3,6], retake_test: {necessity:true, score:4}, approved: false},
                {name: 'Martin', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Valéria', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Eder', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Renata', scores:[4,1,4], retake_test: {necessity:true, score:2}, approved: false},
                {name: 'Renato', scores:[3,4,6], retake_test: {necessity:true, score:4}, approved: false}
            ],
            competition: {
                winner: 'Maria',
                participants: [
                    {name:'Maria', score:8},
                    {name:'Bianca', score:7},
                    {name:'Alex', score:6}
                ]
            }
        },
        {
            teacher:'Ândria',
            students:[
                {name: 'Francisco', scores:[8,4,7], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Jeferson', scores:[7,4,6], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Evan', scores:[3,6,5], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Ariel', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Abraão', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Amanda', scores:[2,3,6], retake_test: {necessity:true, score:4}, approved: false},
                {name: 'Gabriel', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Dylan', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Benedita', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Rayane', scores:[7,4,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Nathaniel', scores:[6,5,8], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Chloé', scores:[6,5,6], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Flora', scores:[8,4,3], retake_test: {necessity:true, score:7}, approved: true},
                {name: 'Esther', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Amaro', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Rebeca', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Timóteo', scores:[2,3,6], retake_test: {necessity:true, score:4}, approved: false},
                {name: 'Briana', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Viktoriya', scores:[4,1,4], retake_test: {necessity:true, score:2}, approved: false},
                {name: 'Matilde', scores:[3,4,6], retake_test: {necessity:true, score:4}, approved: false}
            ],
            competition: {
                winner: 'Francisco',
                participants: [
                    {name:'Francisco', score:9},
                    {name:'Jeferson', score:6},
                    {name:'Evan', score:8}
                ]
            }
        },
        {
            teacher:'Jerónimo',
            students:[
                {name: 'Diamantino', scores:[8,4,7], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Ravidson', scores:[7,4,6], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Luara', scores:[3,6,5], retake_test: {necessity:false, score:0}, approved: true},
                {name: 'Célio', scores:[7,4,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Avelino', scores:[6,5,8], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Noémi', scores:[6,5,6], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Rúdi', scores:[8,4,3], retake_test: {necessity:true, score:7}, approved: true},
                {name: 'Fernanda', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Stefan', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Bento', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Yassna', scores:[2,3,6], retake_test: {necessity:true, score:4}, approved: false},
                {name: 'Alexandro', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Joelma', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Giovany', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Nayara', scores:[2,3,6], retake_test: {necessity:true, score:4}, approved: false},
                {name: 'Maxim', scores:[9,3,4], retake_test: {necessity:true, score:8}, approved: true},
                {name: 'Karolina', scores:[6,6,4], retake_test: {necessity:true, score:9}, approved: true},
                {name: 'Luciana', scores:[3,1,7], retake_test: {necessity:true, score:3}, approved: false},
                {name: 'Isís', scores:[4,1,4], retake_test: {necessity:true, score:2}, approved: false},
                {name: 'Djayson', scores:[3,4,6], retake_test: {necessity:true, score:4}, approved: false}
            ],
            competition: {
                winner: 'Diamantino',
                participants: [
                    {name:'Diamantino', score:8},
                    {name:'Ravidson', score:7},
                    {name:'Luara', score:6}
                ]
            }
        }
    ]

    //retorno principal
    return (
        <div className='list'>
            {classes.map((classes, index) => (
                <Link to= {`/detalhes/${index}/0`}
                className = 'noDecoration' key={index}>
                    <div className='card'>
                        classe N{index}
                        <br></br>
                        <br></br>  
                        professor: {classes.teacher}
                        <br></br>                        
                    </div>
                </Link>
            ))}
        </div>   
    );
}  
export default List;
  