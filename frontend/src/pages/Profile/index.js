import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
	const [incidents, setIncidents] = useState([]);
	const ongName = localStorage.getItem('ongName');
	const ongId = localStorage.getItem('ongId');

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ongId,
			}
		}).then(response => {
			setIncidents(response.data);
		})
	}, [ongId]);

	async function handleDeleteIncident(id) {
		try {
			const response = await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: ongId,
				}
			});

			setIncidents(incidents.filter(i => i.id !== id));
	
		} catch (error) {
			alert('Erro ao deletar caso, tente novamente')
		}
	}

	return (
			<div className="profile-container">
					<header>
							<img src={logoImg} alt="Be The Hero"/>
							<span>Bem vinda, {ongName}</span>
							
							<Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
							<button type="button">
									<FiPower size={18} color="#E02041"/>
							</button>
					</header>

					<h1>Casos cadastrados</h1>
					<ul>
							{incidents.map(i => (
								<li key={i.id}>
									<strong>CASO:</strong>
									<p>{i.title}</p>

									<strong>DESCRIÇÃO</strong>
									<p>{i.description}</p>

									<strong>VALOR:</strong>
									<p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(i.value)}</p>

									<button onClick={() => handleDeleteIncident(i.id)} type="button">
											<FiTrash2 size={20} color="#a8a8b3"/>
									</button>
								</li>
							))}
					</ul>
			</div>
    );
}