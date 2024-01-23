import React from 'react';
import 'react-chatbot-kit/build/main.css';
import Apps from './Apps.jsx';
// import TextToSpeech from "./TextToSpeech.jsx"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from "react-use-clipboard";
// import {useState} from "react";
// import SpeechToText from "./SpeechToText.jsx";




const MyChatbot = () => {

    // const [textToCopy, setTextToCopy] = useState();
    // const [isCopied, setCopied] = useClipboard(textToCopy, {
    //     successDuration:5000
    // });
    // const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // if (!browserSupportsSpeechRecognition) {
    //     return null
    // }
    return (
        <>
            {/* <div className="container">
                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>
                <div className="btn-style">
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
            </div>
             */}
            <React.StrictMode>
                <div class="container">
                
                
                        <Apps />
                        
                </div>
            </React.StrictMode>
    </>
    );
};
export default MyChatbot;