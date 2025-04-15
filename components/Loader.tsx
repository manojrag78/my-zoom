const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="flex space-x-2">
      <div className="size-4 animate-bounce rounded-full bg-blue-600"></div>
      <div className="size-4 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.2s]"></div>
      <div className="size-4 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.4s]"></div>
    </div>
  </div>
  );
};

export default Loader;
