import { NavItem, PricingPlan, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Planos', href: '#pricing' },
  { label: 'Contato', href: '#contact' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Check-up Básico',
    price: 'R$ 250',
    period: 'consulta',
    features: [
      'Acuidade Visual',
      'Tonometria (Pressão)',
      'Retinografia Simples',
      'Receita de Óculos'
    ],
    buttonText: 'Agendar',
    isPopular: false
  },
  {
    name: 'Saúde Completa',
    price: 'R$ 450',
    period: 'anual',
    features: [
      'Todos do Básico',
      'Mapeamento de Retina',
      'Paquimetria',
      'Suporte Prioritário',
      'Retorno em 30 dias'
    ],
    buttonText: 'Começar Agora',
    isPopular: true
  },
  {
    name: 'Cirúrgico Premium',
    price: 'Sob Consulta',
    period: 'procedimento',
    features: [
      'Avaliação Pré-Operatória',
      'Cirurgia Refrativa/Catarata',
      'Acompanhamento Pós',
      'Kit de Medicamentos',
      'Plantão 24h'
    ],
    buttonText: 'Falar com Especialista',
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Costa",
    role: "Designer Gráfico",
    image: "https://picsum.photos/seed/mariana/100/100",
    text: "A cirurgia refrativa mudou minha vida. A equipe da Clinica Regional foi incrivelmente atenciosa desde o primeiro exame.",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    role: "Engenheiro Civil",
    image: "https://picsum.photos/seed/carlos/100/100",
    text: "Profissionalismo ímpar. O check-up anual é rápido e a tecnologia utilizada me passa muita segurança.",
    rating: 5
  }
];
