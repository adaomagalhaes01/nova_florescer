import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Landing } from './pages/Landing';
import { PatientLogin } from './pages/paciente/PatientLogin';
import { PatientLayout } from './pages/paciente/PatientLayout';
import { PatientDashboard } from './pages/paciente/PatientDashboard';
import { PatientConsultas, PatientDocumentos, PatientMensagens, PatientPagamentos, PatientPerfil } from './pages/paciente/PatientPages';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminPages } from './pages/admin/AdminPages';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Landing />} />

          {/* Patient Area */}
          <Route path="/paciente/login" element={<PatientLogin />} />
          <Route path="/paciente" element={<PatientLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PatientDashboard />} />
            <Route path="consultas" element={<PatientConsultas />} />
            <Route path="agendar" element={<div style={{ padding: '2rem' }}>Agendar Nova Consulta</div>} />
            <Route path="documentos" element={<PatientDocumentos />} />
            <Route path="mensagens" element={<PatientMensagens />} />
            <Route path="pagamentos" element={<PatientPagamentos />} />
            <Route path="perfil" element={<PatientPerfil />} />
          </Route>

          {/* Admin Area */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="pacientes" element={<AdminPages page="pacientes" />} />
            <Route path="agenda" element={<AdminPages page="agenda" />} />
            <Route path="financeiro" element={<AdminPages page="financeiro" />} />
            <Route path="relatorios" element={<AdminPages page="relatorios" />} />
            <Route path="equipa" element={<AdminPages page="equipa" />} />
            <Route path="configuracoes" element={<AdminPages page="configuracoes" />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
