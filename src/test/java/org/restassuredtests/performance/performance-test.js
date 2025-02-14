import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuração do teste
export const options = {
  thresholds: {
    'http_req_duration': ['p(95)<500'],  // 95% das requisições devem ter tempo de resposta < 500ms
    'http_req_failed': ['rate<0.01']  // Menos de 1% de falhas
  },
  stages: [
    { duration: '30s', target: 50 },  // Rampa de 0 a 50 usuários em 30s
    { duration: '1m', target: 100 },  // Mantém 100 usuários por 1 minuto
    { duration: '30s', target: 0 },   // Rampa de volta a 0 usuários
  ],
  ext: {
    loadimpact: {
      projectID: 12345, // Opcional para Load Impact
    },
  },
};

// Teste de carga na API mockada
export default function () {
  // Teste de GET
  const getResponse = http.get('http://localhost:3030/users');
  check(getResponse, {
    'GET Status 200': (r) => r.status === 200,
  });

  // Teste de POST
  const postPayload = JSON.stringify({
    name: `User ${__VU}`,  // Nome único por usuário virtual, __VU é uma variável interna do K6
    username: `user_${__VU}`,
    email: `user_${__VU}@test.com`,
  });

  const postResponse = http.post('http://localhost:3030/users', postPayload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(postResponse, {
    'POST Status 201': (r) => r.status === 201,
  });

  sleep(1); // Intervalo entre requisições (1 segundo)
}