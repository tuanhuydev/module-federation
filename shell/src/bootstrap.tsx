import React from 'react';
import { createRoot } from 'react-dom/client';
import AppShell from './App';
import './styles.css';


const container = document.getElementById('app-shell');
if (!container) throw new Error('Container not found');

const root = createRoot(container);
root.render(<AppShell />);
