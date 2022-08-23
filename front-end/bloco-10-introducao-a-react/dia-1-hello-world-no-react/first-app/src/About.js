import React from 'react';

class About extends React.Component {
    render() {
    const skills = ['HTML', 'CSS', 'JS', 'Testes unitários', 'HoFs', 'Jest'];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    const meuNome = 'Bernardo Rafael Luz Mario'
    const descricao = 'Um homem de 25 anos que ama investir seu dinheiro e buscar maneiras de se viver que venha de encontro a seus valores';

        return (
            <div>
                <h1>
                    { meuNome }
                </h1>
                <p>
                    { descricao }
                </p>
                <h2>
                    Minhas Habilidades
                </h2>
                <ul>
                    { jsxSkills }
                </ul>
            </div>
        )
    }
}

export default About;