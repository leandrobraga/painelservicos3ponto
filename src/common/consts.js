import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import 'devicon/devicon.css';

const OPTIONS_MENU = {
  START: {
    id: 0,
    label: 'Dasboard',
    icon: <FontAwesomeIcon icon={faTachometerAlt} size="lg" />,
    showIcon: false,
    link: '/dashboard',
  },
  CELERY: {
    id: 1,
    label: 'Celery',
    icon: <FontAwesomeIcon icon={faTasks} size="lg" />,
    showIcon: false,
    link: '/celery',
  },
  POSTGRES: {
    id: 2,
    label: 'Postgresql',
    icon: <i className="devicon-postgresql-plain" style={{ fontSize: '1.9rem', paddingTop: '40%' }} />,
    showIcon: false,
    link: '/postgresql',
  },
  GUNICORN: {
    id: 3,
    label: 'Gunicorn',
    icon: <i className="devicon-django-plain" style={{ fontSize: '3rem', paddingTop: '25%' }} />,
    showIcon: false,
    link: '/gunicorn',
  },
  NGINX: {
    id: 4,
    label: 'Nginx',
    icon: <i className="devicon-nginx-plain" style={{ fontSize: '3rem', paddingTop: '25%' }} />,
    showIcon: false,
    link: '/nginx',
  },
};

const OPTIONS_DOC = [
  { value: '', label: 'Selecione' },
  { value: 'CPF', label: 'CPF' },
  { value: 'CNPJ', label: 'CNPJ' },
  { value: 'CEI', label: 'CEI' },
];


export { OPTIONS_MENU, OPTIONS_DOC };
