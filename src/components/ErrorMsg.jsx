const ErrorMsg = ({children}) => {
  return (
    <div className="bg-red-400 text-gray-100 text-bold text-center p-3 mb-5 rounded-md">
      {children}
    </div>
  );
}
 
export default ErrorMsg;