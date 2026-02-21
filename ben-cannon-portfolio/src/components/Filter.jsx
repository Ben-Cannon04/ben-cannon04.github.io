import PropTypes from 'prop-types';

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

function Filter({ filter, setFilter, filters, isDarkMode }) {
  return (
    <div
      className="flex justify-start sm:justify-center overflow-x-auto sm:overflow-visible space-x-4 px-4"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex gap-4 m-5 p-4 items-center justify-center">
        {filters.map(item => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-2 sm:px-4 py-2 transition-all duration-200 hover:opacity-80 border-b-2 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}
                        ${
                          filter === item
                            ? `${isDarkMode ? 'border-white' : 'border-black'} hover:border-opacity-80 font-semibold scale-105`
                            : 'border-transparent'
                        }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
