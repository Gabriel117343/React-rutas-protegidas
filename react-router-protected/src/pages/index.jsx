//esta son las paginas a mostrar, cada una deberia de ser un componente aparte ej: Landing.jsx, Home.jsx, Dashboard.jsx, Analytics.jsx, Admin.jsx
export const Landing = () => <h2 className="titulo">Landing Page(Public)</h2>

export const Home = () => {
  
  return <h2 className="titulo">Home Page(Private)</h2>
}

export const Dashboard = () => <h2 className="titulo">Dashboard Page(Private)</h2>

// eslint-disable-next-line react/no-unescaped-entities
export const Analytics = () => <h2 className="titulo">Analytics (Private, permission: 'analize')</h2>

// eslint-disable-next-line react/no-unescaped-entities
export const Admin = () => <h2 className="titulo">Admin (Private, permission:'admin')</h2>