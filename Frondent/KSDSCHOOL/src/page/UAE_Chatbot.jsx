import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaPhone, FaClock } from 'react-icons/fa';

const UAE_Chatbot = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // UAE-themed initial messages
  const initialMessages = [
    {
      id: 1,
      text: "السلام عليكم! Welcome to Aliya Senior Secondary School. How can I assist you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: 2,
      text: "You can ask about admissions, school programs, or any other inquiries.",
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ];

  // UAE-relevant quick replies
  const quickReplies = [
    "Admission process",
    "School fees",
    "Academic programs",
    "School timings",
    "Contact information"
  ];

  // UAE school information
  const schoolInfo = {
    phone: "+971 4 123 4567",
    address: "Al Nahda Street, Al Qusais, Dubai, UAE",
    hours: "Sunday-Thursday: 7:30 AM - 3:30 PM",
    email: "info@aliyaschool.ae"
  };

  useEffect(() => {
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    handleSendMessage();
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let responseText = '';
    
    if (input.includes('admission') || input.includes('apply')) {
      responseText = `Our admission process begins in March each year. Requirements include:
      - Previous school records
      - Passport copy
      - 4 passport photos
      - Completed application form

      Would you like me to email you the detailed admission package?`;
    } 
    else if (input.includes('fee') || input.includes('payment') || input.includes('tuition')) {
      responseText = `Our annual fees range from:
      - Primary (Grades 1-5): AED 12,000
      - Middle (Grades 6-8): AED 15,000
      - Secondary (Grades 9-12): AED 18,000
      
      We offer:
      - 10% sibling discount
      - 3-installment payment plan
      - Scholarship opportunities`;
    }
    else if (input.includes('program') || input.includes('curriculum') || input.includes('study')) {
      responseText = `We follow the UAE Ministry of Education curriculum with:
      - Enhanced STEM programs
      - Arabic language studies (required)
      - Islamic education
      - Extracurricular activities:
        * Robotics club
        * Quran memorization
        * Dubai Youth Council
        * Sports teams`;
    }
    else if (input.includes('time') || input.includes('hour') || input.includes('schedule')) {
      responseText = `School Hours:
      ${schoolInfo.hours}
      Friday and Saturday: Weekend
      
      Office Hours:
      Sunday-Thursday: 7:00 AM - 4:00 PM`;
    }
    else if (input.includes('contact') || input.includes('reach') || input.includes('location')) {
      responseText = `Contact Information:
      📞 Phone: ${schoolInfo.phone}
      📍 Address: ${schoolInfo.address}
      ✉️ Email: ${schoolInfo.email}
      
      We're located near Al Qusais Metro Station, Exit 2`;
    }
    else {
      responseText = "Thank you for your question. For more detailed inquiries, I can connect you with our admissions team. Would you like me to arrange a callback?";
    }

    return {
      id: Date.now(),
      text: responseText,
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      scrollToBottom();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen ? (
        <button 
          onClick={toggleChat}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl animate-bounce"
          style={{ 
            backgroundColor: colors.secondary,
            transition: 'transform 0.3s ease'
          }}
          aria-label="Open chatbot"
        >
          <FaRobot className="text-white text-2xl" />
        </button>
      ) : (
        <div 
          className="w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
          style={{ borderTop: `4px solid ${colors.primary}` }}
        >
          {/* Chat header */}
          <div 
            className="py-3 px-4 flex justify-between items-center"
            style={{ backgroundColor: colors.primary }}
          >
            <div className="flex items-center">
              <FaRobot className="text-white mr-2" />
              <h3 className="text-white font-bold">School Assistant</h3>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-yellow-200 transition-colors"
              aria-label="Close chatbot"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}
                  style={{
                    backgroundColor: message.sender === 'user' ? colors.primary : '#f0f0f0',
                    color: message.sender === 'user' ? 'white' : 'black'
                  }}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p 
                    className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div 
                  className="max-w-xs p-3 rounded-lg rounded-tl-none bg-gray-200"
                >
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick replies */}
          <div className="px-3 py-2 bg-white border-t flex flex-wrap gap-2 max-h-20 overflow-y-auto">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="text-xs px-3 py-1 rounded-full border hover:bg-blue-50 transition-colors"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.primary
                }}
              >
                {reply}
              </button>
            ))}
          </div>
          
          {/* Contact info */}
          <div className="px-3 py-2 bg-gray-100 text-xs flex justify-between border-t">
            <div className="flex items-center">
              <FaPhone className="mr-1" style={{ color: colors.primary }} />
              <span>{schoolInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-1" style={{ color: colors.primary }} />
              <span>7:30AM-3:30PM</span>
            </div>
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              style={{ borderColor: colors.primary }}
              aria-label="Type your message"
            />
            <button
              type="submit"
              className="px-3 rounded-r-lg hover:bg-blue-700 transition-colors"
              style={{ 
                backgroundColor: colors.primary, 
                color: 'white'
              }}
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UAE_Chatbot;