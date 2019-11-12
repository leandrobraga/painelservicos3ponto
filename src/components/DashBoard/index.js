import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

const DashBoard = () => (
  <div className="columns">
    <div className="column">
      <article className="message is-warning">
        <div className="message-header">
          <p style={{ color: 'white' }}>Status dos Serviços</p>
        </div>
        <div className="message-body">
          <div className="columns">
            <div className="column">
              <section className="hero is-success">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <FontAwesomeIcon icon={faTasks} size="3x" />
                    <h1 className="title">
                      Celery
                    </h1>
                    <h2 className="subtitle">
                      Ativo
                    </h2>
                  </div>
                </div>
              </section>
            </div>
            <div className="column">
              <section className="hero is-danger">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <i className="devicon-postgresql-plain" style={{ fontSize: '3.0rem' }} />
                    <h1 className="title">
                      Postgresql
                    </h1>
                    <h2 className="subtitle">
                      Inativo
                    </h2>
                  </div>
                </div>
              </section>
            </div>
            <div className="column">
              <section className="hero is-danger">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <i className="devicon-django-plain" style={{ fontSize: '3.0rem' }} />
                    <h1 className="title">
                      Gunicorn
                    </h1>
                    <h2 className="subtitle">
                      Inativo
                    </h2>
                  </div>
                </div>
              </section>
            </div>
            <div className="column">
              <section className="hero is-danger">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    <i className="devicon-nginx-plain" style={{ fontSize: '3.0rem' }} />
                    <h1 className="title">
                      Nginx
                    </h1>
                    <h2 className="subtitle">
                      Inativo
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>

  </div>
);

export default DashBoard;
