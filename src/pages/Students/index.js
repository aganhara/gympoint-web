import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import {
  Container,
  StudentList,
  EditUserButton,
  RemoveUserButton,
} from './styles';

import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      setStudents(response.data);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <div>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </button>
          <input type="text" name="Search" placeholder="Buscar aluno" />
        </div>
      </header>
      <StudentList>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>IDADE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <EditUserButton>editar</EditUserButton>
                  <RemoveUserButton>apagar</RemoveUserButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StudentList>
    </Container>
  );
}
