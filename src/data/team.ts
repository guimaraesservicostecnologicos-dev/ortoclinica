// Dados de exemplo — substituir por médicos, fotos e CRMs reais da clínica.
//
// Para adicionar a foto de um profissional:
//   1. salve o arquivo em src/assets/equipe/ (ex.: camila.png)
//   2. importe aqui em cima:  import camila from '../assets/equipe/camila.png'
//   3. acrescente  photo: camila  no objeto correspondente
// Sem foto, o card usa automaticamente um bloco com as iniciais.
import sergio from '../assets/equipe/sergio.webp'

export type TeamMember = {
  name: string
  role: string
  crm: string
  rqe: string
  bio: string
  initials: string
  /** Retrato do médico. Sem foto, o card cai num bloco com as iniciais. */
  photo?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Sérgio Marinho de Gusmão Canuto',
    role: 'Ortopedista — Joelho e Medicina Esportiva',
    crm: 'CRM-AL 3223',
    rqe: 'RQE 934',
    bio: 'Mais de 15 anos de experiência em cirurgia do joelho e acompanhamento de atletas de alto rendimento.',
    initials: 'SC',
    photo: sergio,
  },
  {
    name: 'Dra. Camila Fontoura Reis',
    role: 'Ortopedista — Coluna',
    crm: 'CRM-SP 000000',
    rqe: 'RQE 000',
    bio: 'Especialista em tratamento minimamente invasivo de hérnias de disco e desvios da coluna vertebral.',
    initials: 'CR',
  },
  {
    name: 'Dr. Eduardo Vasconcelos Lima',
    role: 'Ortopedista — Quadril',
    crm: 'CRM-SP 000000',
    rqe: 'RQE 000',
    bio: 'Referência em preservação articular e cirurgia de prótese total de quadril.',
    initials: 'EL',
  },
  {
    name: 'Dra. Beatriz Solano Prado',
    role: 'Ortopedista — Pé e Tornozelo',
    crm: 'CRM-SP 000000',
    rqe: 'RQE 000',
    bio: 'Atuação voltada à correção de deformidades e reabilitação de lesões esportivas do pé e tornozelo.',
    initials: 'BP',
  },
  {
    name: 'Dr. Felipe Camargo Nogueira',
    role: 'Ortopedista — Ombro e Cotovelo',
    crm: 'CRM-SP 000000',
    rqe: 'RQE 000',
    bio: 'Cirurgião com foco em técnicas artroscópicas para lesões do manguito rotador.',
    initials: 'FN',
  },
  {
    name: 'Dra. Juliana Marques Teles',
    role: 'Fisioterapeuta — Reabilitação',
    crm: 'CREFITO 000000',
    rqe: 'RQE 000',
    bio: 'Responsável pelos programas de reabilitação pré e pós-operatória integrados ao time médico.',
    initials: 'JT',
  },
]
