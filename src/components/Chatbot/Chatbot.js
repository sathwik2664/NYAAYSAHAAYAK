import ChatBot from 'react-simple-chatbot';
function Chatbot2(){
    console.log('Simplechat component rendered');
    return(
        
        <ChatBot
        steps={[
          {
            id: '1',
            message: 'Need help with the following things?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 'Laws', label: 'Laws', trigger: '4' },
              { value: 'Login', label: 'Login', trigger: '3' },
              { value: 'Chat with AI', label: 'Chat With AI', trigger: '3' },
            ],
          },
          {
            id: '3',
            message: 'Wrong answer, try again.',
            trigger: '2',
          },
          {
            id: '4',
            message: 'Awesome! You are a telepath!',
            end: true,
          },
        ]}
      />
    
        
    )
}
export default Chatbot2;

