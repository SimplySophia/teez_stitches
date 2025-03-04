const Button = ({ text, to, setView }) => {
    const handleClick = () => {
      console.log("Button clicked", to);
      if (setView) {
        setView('product'); // Change the view
      }
    };
  
    return (
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  