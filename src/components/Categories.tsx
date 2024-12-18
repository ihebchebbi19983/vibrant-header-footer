import React, { CSSProperties } from 'react';

const Categories = () => {
  const categories = ['SUITS', 'BLAZERS', 'POLO AND T-SHIRTS', 'SHIRTS'];

  const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '11px',
    marginBottom: '42px',
    flexWrap: 'wrap',
    padding: '0 10px',
  };

  const buttonStyle: CSSProperties = {
    padding: '8px 21px',
    border: '1px solid #700100',
    background: 'transparent',
    cursor: 'pointer',
    color: '#700100',
    fontSize: '15px',
    transition: 'all 0.3s ease',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => (btn as HTMLElement).style.background = 'transparent');
    (e.target as HTMLElement).style.background = '#f0f0f0';
  };

  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 768px) {
        .categories-container {
          gap: 8px;
          margin-bottom: 30px;
        }
        .filter-button {
          font-size: 13px;
          padding: 6px 15px;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={containerStyle} className="categories-container">
      {categories.map((category) => (
        <button
          key={category}
          className="filter-button"
          style={buttonStyle}
          onClick={handleClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
