import { Link } from 'react-router-dom'

export default function Button({children, to, color, text='12px', bg='transparent', border}) {
    const link = {
        color: color,
        padding: '0.1rem 1.7rem',
        fontSize: text,
        fontWeight: 700,
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        border: `2px solid ${border}`,
        backgroundColor: bg,
        borderRadius: '16px'

    }
  return (
    <Link to={to} type='button' style={link}>
        {children}
    </Link>
  )
}
