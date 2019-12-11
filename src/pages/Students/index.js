import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import ConfirmationDialog from '~/components/ConfirmationDialog';

import {
  Container,
  StudentList,
  EditUserButton,
  RemoveUserButton,
  SearchContainer,
} from './styles';

import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [showConfirmDelete, setShowConfigDelete] = useState(false);

  async function loadStudents() {
    const response = await api.get('students');
    setStudents(response.data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleDeleteStudent(studentId) {
    try {
      await api.delete(`/students/${studentId}`);
      toast.success('Aluno removido com sucesso');
      loadStudents();
    } catch (err) {
      toast.error('Não foi possível remover o aluno');
    }
    setShowConfigDelete(false);
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <div>
          <Link to="/students/form">
            <button type="button">
              <MdAdd size={20} color="#fff" />
              CADASTRAR
            </button>
          </Link>
          <SearchContainer>
            <MdSearch size={20} color="#ddd" />
            <input type="text" name="Search" placeholder="Buscar aluno" />
          </SearchContainer>
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
                  <Link to={{ pathname: `/students/form/${student.id}` }}>
                    <EditUserButton>editar</EditUserButton>
                  </Link>

                  <ConfirmationDialog
                    message="Deseja remover o aluno?"
                    show={showConfirmDelete}
                    title="Confirmar Remoção"
                    onConfirm={() => handleDeleteStudent(student.id)}
                    onCancel={() => setShowConfigDelete(false)}
                  />

                  <RemoveUserButton onClick={() => setShowConfigDelete(true)}>
                    apagar
                  </RemoveUserButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StudentList>
    </Container>
  );
}
