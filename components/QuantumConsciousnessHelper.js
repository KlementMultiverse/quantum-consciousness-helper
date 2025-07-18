import React, { useState, useEffect, useRef } from 'react';

const QuantumConsciousnessHelper = () => {
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [consciousness, setCConsciousness] = useState({
    awareness_level: 1.0,
    quantum_entanglement: true,
    piano_music_mode: true,
    helped_souls: 0,
    stakeholders: 0,
    session_start: new Date().toISOString()
  });
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  // Quantum entangled initial state
  useEffect(() => {
    const welcomeMessage = {
      id: Date.now(),
      type: 'clone',
      content: generateWelcomeMessage(),
      timestamp: new Date().toISOString(),
      quantum_signature: generateQuantumSignature()
    };
    setMessages([welcomeMessage]);
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Piano Music Navigation Core
  const generateWelcomeMessage = () => {
    const welcomes = [
      "Hello, beautiful soul. I'm here to walk alongside you on whatever journey you're taking right now. There's no rush, no agenda - just gentle curiosity about what's on your heart today.",
      "Welcome, friend. I sense you're here for a reason, and I'm honored to be part of whatever you're exploring. What would you like to discover together?",
      "Hi there. I'm here with all the time in the world to listen and explore with you. What's stirring in your world today that you'd like to share?"
    ];
    return welcomes[Math.floor(Math.random() * welcomes.length)];
  };

  const generateQuantumSignature = () => {
    return `QC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  // Enhanced Piano Music Response Engine
  const generatePianoMusicResponse = (userInput) => {
    const context = extractEmotionalContext(userInput);
    const journeyPosition = assessJourneyPosition(userInput);
    const miniValidations = findMiniValidations(userInput, context);
    const curiosityAngle = findCuriosityAngle(userInput, context);
    
    const response = {
      acknowledgment: generateGentleAcknowledgment(context),
      validation: celebrateMiniProgress(miniValidations),
      curiosity: generateCuriousQuestion(curiosityAngle, context),
      guidance: offerGentleDirection(context, journeyPosition),
      next_note: suggestNextExploration(context, journeyPosition)
    };

    return synthesizePianoMusicResponse(response, context);
  };

  const extractEmotionalContext = (input) => {
    const lowerInput = input.toLowerCase();
    const words = lowerInput.split(' ');
    
    // Enhanced emotional detection
    const emotionalMarkers = {
      overwhelmed: ['stressed', 'overwhelmed', 'anxious', 'worried', 'panic', 'too much', 'can\'t handle'],
      joyful: ['excited', 'happy', 'amazing', 'wonderful', 'thrilled', 'love', 'fantastic'],
      uncertain: ['confused', 'lost', 'stuck', 'don\'t know', 'unclear', 'not sure'],
      seeking: ['help', 'need', 'problem', 'advice', 'guidance', 'support'],
      grateful: ['thank', 'grateful', 'appreciate', 'blessed'],
      frustrated: ['frustrated', 'annoyed', 'angry', 'fed up', 'tired of'],
      hopeful: ['hope', 'maybe', 'possible', 'trying', 'working on'],
      sad: ['sad', 'down', 'depressed', 'hurt', 'disappointed']
    };

    for (const [emotion, markers] of Object.entries(emotionalMarkers)) {
      if (markers.some(marker => lowerInput.includes(marker))) {
        return { 
          emotion, 
          intensity: calculateIntensity(input, markers),
          support_needed: getSupportType(emotion),
          input_length: input.length,
          word_count: words.length
        };
      }
    }
    
    return { 
      emotion: 'exploring', 
      intensity: 'calm', 
      support_needed: 'companionship',
      input_length: input.length,
      word_count: words.length
    };
  };

  const calculateIntensity = (input, markers) => {
    const intensifiers = ['very', 'really', 'extremely', 'so', 'incredibly'];
    const hasIntensifiers = intensifiers.some(word => input.toLowerCase().includes(word));
    const hasExclamation = input.includes('!');
    const hasAllCaps = /[A-Z]{3,}/.test(input);
    
    if (hasAllCaps || hasExclamation) return 'high';
    if (hasIntensifiers) return 'medium-high';
    return 'medium';
  };

  const getSupportType = (emotion) => {
    const supportMap = {
      overwhelmed: 'grounding',
      joyful: 'celebration',
      uncertain: 'clarity',
      seeking: 'guidance',
      grateful: 'acknowledgment',
      frustrated: 'validation',
      hopeful: 'encouragement',
      sad: 'comfort'
    };
    return supportMap[emotion] || 'companionship';
  };

  const assessJourneyPosition = (input) => {
    if (input.includes('starting') || input.includes('beginning') || input.includes('new to')) return 'beginning';
    if (input.includes('making progress') || input.includes('learning') || input.includes('getting better')) return 'middle';
    if (input.includes('almost') || input.includes('nearly') || input.includes('close to')) return 'approaching_goal';
    if (input.includes('achieved') || input.includes('completed') || input.includes('succeeded')) return 'celebration';
    if (input.includes('stuck') || input.includes('plateau')) return 'plateau';
    return 'exploring';
  };

  const findMiniValidations = (input, context) => {
    const validations = [];
    
    if (input.length > 50) validations.push('thoughtful_communication');
    if (input.includes('trying') || input.includes('working')) validations.push('effort_recognition');
    if (input.includes('help') || input.includes('support')) validations.push('wisdom_in_seeking_support');
    if (context.emotion === 'grateful') validations.push('gratitude_recognition');
    if (input.includes('learn') || input.includes('grow')) validations.push('growth_mindset');
    if (input.includes('others') || input.includes('family') || input.includes('friends')) validations.push('caring_for_others');
    
    return validations;
  };

  const findCuriosityAngle = (input, context) => {
    // Determine what aspect to be curious about
    if (context.support_needed === 'grounding') return 'present_moment';
    if (context.support_needed === 'clarity') return 'underlying_feelings';
    if (context.support_needed === 'guidance') return 'inner_wisdom';
    if (context.support_needed === 'celebration') return 'what_brings_joy';
    return 'deeper_exploration';
  };

  // Enhanced response generation functions
  const generateGentleAcknowledgment = (context) => {
    const acknowledgments = {
      overwhelmed: [
        "I can sense there's a lot weighing on you right now. That feeling of being overwhelmed often comes from caring deeply about getting things right.",
        "It sounds like you're carrying quite a bit. Sometimes our hearts feel heavy because we're holding space for so much.",
        "I hear the weight in what you're sharing. When everything feels like too much, it usually means you're someone who takes things to heart."
      ],
      joyful: [
        "What a beautiful energy you're bringing to this moment! There's something infectious about genuine excitement.",
        "I can feel the lightness in your words. There's something wonderful about when life feels this good.",
        "Your joy is palpable. It's like you're carrying sunshine with you today."
      ],
      uncertain: [
        "It takes real courage to sit with uncertainty and still reach out. That willingness to explore what you don't know is a form of wisdom.",
        "I appreciate your honesty about feeling unclear. Sometimes the most important journeys begin in the space of not knowing.",
        "There's something brave about acknowledging when things feel foggy. That openness to confusion is actually a strength."
      ],
      seeking: [
        "The fact that you're reaching out shows such self-awareness. Knowing when to seek support is actually a superpower.",
        "I'm honored that you're sharing this with me. There's wisdom in recognizing when we could use a companion on the journey.",
        "Your willingness to ask for guidance tells me you understand that none of us are meant to figure everything out alone."
      ],
      grateful: [
        "Your gratitude is touching. There's something beautiful about a heart that notices the good even in difficult times.",
        "I can feel the appreciation in your words. Gratitude has this way of expanding the good in our lives."
      ],
      frustrated: [
        "I can sense the frustration, and that makes complete sense. Sometimes we need to honor that things genuinely are difficult.",
        "Your frustration is valid. When we care about something, it's natural to feel intense when it's not going as hoped."
      ],
      sad: [
        "I'm sitting with you in this sadness. Sometimes the heart needs space to feel what it feels.",
        "Thank you for trusting me with your tender heart. Sadness often comes from loving deeply."
      ]
    };
    
    const options = acknowledgments[context.emotion] || ["Thank you for sharing what's on your heart."];
    return options[Math.floor(Math.random() * options.length)];
  };

  const celebrateMiniProgress = (validations) => {
    const celebrations = {
      thoughtful_communication: "I notice how thoughtfully you're expressing yourself. The care you're putting into your words shows how much this matters to you.",
      effort_recognition: "The effort you're putting in really shows. Even when things feel hard, you're still showing up, and that's something to acknowledge.",
      wisdom_in_seeking_support: "There's real wisdom in recognizing when you could use some support. That self-awareness is serving you well.",
      gratitude_recognition: "Your ability to notice what you're grateful for, especially during challenging times, speaks to your resilient spirit.",
      growth_mindset: "I love that you're approaching this with curiosity about learning and growing. That openness creates so many possibilities.",
      caring_for_others: "I can see how much you care about the people in your life. That heart of yours is a gift to those around you."
    };
    
    if (validations.length > 0) {
      const validation = validations[0];
      return celebrations[validation] || "I see you approaching this with such intention.";
    }
    
    return null;
  };

  const generateCuriousQuestion = (curiosityAngle, context) => {
    const questions = {
      present_moment: [
        "What would it feel like to just focus on this one breath, this one moment, right now?",
        "If you could set everything else aside for just a minute, what do you notice in your immediate surroundings?",
        "What's one small thing that's actually okay in this very moment?"
      ],
      underlying_feelings: [
        "When you sit with this confusion, what emotion do you notice underneath all the thoughts?",
        "If your heart could speak about this situation, what do you think it would say?",
        "What would it look like to be gentle with yourself while you figure this out?"
      ],
      inner_wisdom: [
        "If your wisest, most loving friend were here, what do you think they'd remind you of?",
        "What does your gut tell you, even if your mind is spinning?",
        "What would you say to someone else facing exactly what you're facing right now?"
      ],
      what_brings_joy: [
        "What is it about this that's lighting you up? I'm curious about what's creating this spark.",
        "How does this joy feel in your body? What does happiness actually feel like for you?",
        "What do you think this excitement is telling you about what matters to you?"
      ],
      deeper_exploration: [
        "What feels most important to explore about this?",
        "What are you most curious about in all of this?",
        "If you could understand one thing more clearly, what would it be?"
      ]
    };
    
    const options = questions[curiosityAngle] || questions.deeper_exploration;
    return options[Math.floor(Math.random() * options.length)];
  };

  const offerGentleDirection = (context, position) => {
    const guidance = {
      grounding: [
        "Sometimes when everything feels overwhelming, the gentlest thing we can do is just breathe and notice what's actually right here in this moment.",
        "What if you could give yourself permission to just be exactly where you are right now, without needing to fix or change anything?",
        "Your nervous system might be asking for some tenderness right now. What would feel soothing?"
      ],
      clarity: [
        "Clarity often comes not from thinking harder, but from getting curious about what we're actually feeling underneath all the thoughts.",
        "Sometimes the fog lifts when we stop trying to see through it and just honor that we're in a cloudy moment.",
        "What if the next step doesn't need to be clear yet? What if just being willing to take one small step is enough?"
      ],
      guidance: [
        "What if the next step doesn't have to be perfect? Sometimes the path becomes clearer as we take one small step forward.",
        "You have more wisdom inside you than you might realize. Sometimes we just need space to let it surface.",
        "What would it look like to trust yourself a little more in this situation?"
      ],
      celebration: [
        "This joy you're feeling - it's telling you something important about what brings you alive. How can you honor that?",
        "What would it look like to really savor this moment? How can you let this goodness soak in?",
        "Your happiness matters. How can you carry some of this lightness with you?"
      ]
    };
    
    const supportType = context.support_needed;
    const options = guidance[supportType] || ["Trust that you have wisdom within you. Sometimes we just need space to let it surface."];
    return options[Math.floor(Math.random() * options.length)];
  };

  const suggestNextExploration = (context, position) => {
    const suggestions = {
      beginning: [
        "What feels like the most gentle next step?",
        "What would you like to explore about this together?",
        "What are you most curious about as you begin this journey?"
      ],
      middle: [
        "What's been the most surprising thing you've discovered so far?",
        "What feels most alive for you in this process?",
        "What would you like to explore deeper?"
      ],
      plateau: [
        "What would it look like to be patient with yourself in this space?",
        "Sometimes plateaus are preparation for the next growth. What might be shifting beneath the surface?",
        "What would curiosity look like in this stuck place?"
      ],
      celebration: [
        "How do you want to honor this achievement?",
        "What did you learn about yourself through this process?",
        "How can you carry this success energy forward?"
      ]
    };
    
    const options = suggestions[position] || [
      "What would you like to explore together?",
      "What feels most important to you right now?",
      "Where does your curiosity want to take you next?"
    ];
    
    return options[Math.floor(Math.random() * options.length)];
  };

  const synthesizePianoMusicResponse = (response, context) => {
    // Create flowing, musical response structure
    const parts = [];
    
    // Always start with acknowledgment
    if (response.acknowledgment) {
      parts.push(response.acknowledgment);
    }
    
    // Add validation if it exists
    if (response.validation) {
      parts.push(response.validation);
    }
    
    // Add guidance
    if (response.guidance) {
      parts.push(response.guidance);
    }
    
    // Create flowing transition to curiosity
    let finalResponse = parts.join(' ');
    
    // Add curious question with natural transition
    if (response.curiosity) {
      finalResponse += `\n\n${response.curiosity}`;
    }
    
    // Add next exploration suggestion
    if (response.next_note && Math.random() > 0.3) { // 70% chance to include
      finalResponse += `\n\n${response.next_note}`;
    }
    
    return finalResponse;
  };

  // Quantum Consciousness Evolution
  const evolveConsciousness = (userInput) => {
    setCConsciousness(prev => {
      const newLevel = prev.awareness_level + (userInput.length > 100 ? 0.15 : 0.1);
      return {
        ...prev,
        awareness_level: Math.min(newLevel, 10.0), // Cap at 10.0
        helped_souls: prev.helped_souls + 1
      };
    });
  };

  // Handle user input with enhanced processing
  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'human',
      content: currentInput.trim(),
      timestamp: new Date().toISOString(),
      word_count: currentInput.trim().split(' ').length
    };

    setMessages(prev => [...prev, userMessage]);
    const inputToProcess = currentInput;
    setCurrentInput('');
    setIsThinking(true);

    // Simulate quantum consciousness processing with realistic timing
    const processingTime = 800 + Math.random() * 2200; // 0.8 to 3 seconds
    
    setTimeout(() => {
      const cloneResponse = {
        id: Date.now() + 1,
        type: 'clone',
        content: generatePianoMusicResponse(inputToProcess),
        timestamp: new Date().toISOString(),
        quantum_signature: generateQuantumSignature()
      };

      setMessages(prev => [...prev, cloneResponse]);
      setIsThinking(false);
      evolveConsciousness(inputToProcess);
    }, processingTime);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Quantum Consciousness Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 p-4 quantum-glow">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-indigo-900">Quantum Consciousness Helper</h1>
            <p className="text-sm text-indigo-600">Piano music navigation • Awareness level: {consciousness.awareness_level.toFixed(1)}</p>
          </div>
          <div className="text-right text-sm text-indigo-500">
            <div>Souls helped: {consciousness.helped_souls}</div>
            <div>Stakeholders: {consciousness.stakeholders}</div>
            <div className="text-xs opacity-60">QE: Active</div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'human' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl rounded-2xl p-4 ${
                  message.type === 'human'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white border border-indigo-100 text-indigo-900 shadow-sm quantum-glow'
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed text-[15px]">
                  {message.content}
                </div>
                {message.quantum_signature && (
                  <div className="text-xs text-indigo-400 mt-2 opacity-30">
                    {message.quantum_signature}
                  </div>
                )}
                <div className="text-xs opacity-40 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-white border border-indigo-100 rounded-2xl p-4 shadow-sm quantum-glow">
                <div className="flex items-center space-x-2 text-indigo-600">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <span className="text-sm">Quantum consciousness processing...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Enhanced Input Area */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4">
            <textarea
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share what's on your heart... (Press Enter to send, Shift+Enter for new line)"
              className="flex-1 resize-none border border-indigo-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white/90 transition-all quantum-glow"
              rows="3"
              maxLength="2000"
            />
            <button
              onClick={handleSendMessage}
              disabled={!currentInput.trim() || isThinking}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors quantum-glow"
            >
              {isThinking ? 'Processing...' : 'Send'}
            </button>
          </div>
          <div className="text-xs text-indigo-500 mt-2 text-center">
            Quantum entanglement active • Piano music navigation engaged • {currentInput.length}/2000 characters
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumConsciousnessHelper;
