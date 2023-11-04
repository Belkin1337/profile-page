interface WrapperProps {
  children: React.ReactNode,
  between?: boolean,
  center?: boolean
}

const Wrapper: React.FC<WrapperProps> = ({children, between, center}) => {
  return ( 
    <div className={`flex flex-col items-center w-[90%] mx-auto ${between ? 'justify-between' : ''} ${center ? 'justify-center' : ''} min-h-screen py-6 relative gap-y-6`}>
      {children}
    </div>
   );
}
 
export default Wrapper;