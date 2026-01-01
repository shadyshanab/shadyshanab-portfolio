'use client';

import React, { useState, useEffect, useRef } from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import { gsap } from 'gsap';

const questions = [
  {
    question: "What are the two broad categories of performance issues in React applications?",
    options: [
      { id: "A", text: "Big bottlenecks and small accumulated issues", isCorrect: true },
      { id: "B", text: "Memory leaks and network latency", isCorrect: false },
      { id: "C", text: "Synchronous blocks and asynchronous delays", isCorrect: false },
      { id: "D", text: "Client-side errors and server-side errors", isCorrect: false },
    ]
  },
  {
    question: "What feature in React Developer Tools helps identify unnecessary re-renders?",
    options: [
      { id: "A", text: "Component highlighting that flashes when re-rendering occurs", isCorrect: true },
      { id: "B", text: "Automatic code refactoring suggestions for components", isCorrect: false },
      { id: "C", text: "Real-time API call monitoring and response times", isCorrect: false },
      { id: "D", text: "Memory usage graphs for each component instance", isCorrect: false },
    ]
  },
  {
    question: "What React features introduced in versions 18 and 19 help solve major performance problems?",
    options: [
      { id: "A", text: "Automatic code splitting and lazy loading modules", isCorrect: false },
      { id: "B", text: "Server-side rendering and static site generation", isCorrect: false },
      { id: "C", text: "Built-in state management and global context stores", isCorrect: false },
      { id: "D", text: "Transitions and React Fiber architecture improvements", isCorrect: true },
    ]
  },
  {
    question: "Why are accumulated small performance issues considered more insidious than single large bottlenecks?",
    options: [
      { id: "A", text: "They are impossible to detect with profiling tools", isCorrect: false },
      { id: "B", text: "They require complete application rewrites to resolve", isCorrect: false },
      { id: "C", text: "They only affect older browsers and mobile devices", isCorrect: false },
      { id: "D", text: "They accumulate gradually and become difficult to refactor", isCorrect: true },
    ]
  },
  {
    question: "What approach can help prevent the accumulation of small performance issues?",
    options: [
      { id: "A", text: "Using only class components instead of functional components", isCorrect: false },
      { id: "B", text: "Rewriting components every month to maintain freshness", isCorrect: false },
      { id: "C", text: "Identifying and addressing issues early during code reviews", isCorrect: true },
      { id: "D", text: "Avoiding the use of third-party libraries entirely", isCorrect: false },
    ]
  },
  {
    question: "What is the golden rule of performance optimization?",
    options: [
      { id: "A", text: "Not doing stuff is faster than doing stuff", isCorrect: true },
      { id: "B", text: "Caching everything is always the best approach", isCorrect: false },
      { id: "C", text: "Re-rendering frequently improves user experience", isCorrect: false },
      { id: "D", text: "Always use memoization for better performance", isCorrect: false },
    ]
  },
  {
    question: "What is one of the main risks of overusing React.memo and memoization?",
    options: [
      { id: "A", text: "Cache invalidation bugs can be extremely difficult to debug", isCorrect: true },
      { id: "B", text: "It can improve performance in all cases", isCorrect: false },
      { id: "C", text: "It makes the application run faster automatically", isCorrect: false },
      { id: "D", text: "It reduces the complexity of the codebase", isCorrect: false },
    ]
  },
  {
    question: "Why is 'feeling fast' considered almost as valuable as actually being fast?",
    options: [
      { id: "A", text: "It eliminates the need for code optimization", isCorrect: false },
      { id: "B", text: "It automatically reduces the application's bundle size", isCorrect: false },
      { id: "C", text: "It requires less server resources to implement", isCorrect: false },
      { id: "D", text: "Preloading and optimistic UI updates improve perceived performance without actual speed gains", isCorrect: true },
    ]
  },
  {
    question: "What problem do React's useTransition and similar hooks primarily solve?",
    options: [
      { id: "A", text: "They eliminate the need for state management", isCorrect: false },
      { id: "B", text: "They reduce server response times significantly", isCorrect: false },
      { id: "C", text: "They provide the ability to prioritize urgent updates over less important ones", isCorrect: true },
      { id: "D", text: "They automatically memoize all components", isCorrect: false },
    ]
  },
  {
    question: "When might paying a slight performance cost upfront be beneficial?",
    options: [
      { id: "A", text: "When the application has minimal user interaction requirements", isCorrect: false },
      { id: "B", text: "When users will spend extended time in an application and benefit from snappy interactions", isCorrect: true },
      { id: "C", text: "When building content sites that need fast initial page loads", isCorrect: false },
      { id: "D", text: "When server resources are unlimited and cost is not a factor", isCorrect: false },
    ]
  }
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate question entry
    if (questionRef.current) {
      gsap.fromTo(questionRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentQuestion]);

  const handleOptionClick = (optionId: string, isCorrect: boolean) => {
    if (isAnswered) return;

    setSelectedOption(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <Wrapper>
      <HeaderOne />
      <div className="quiz-area pt-150 pb-150 p-relative theme-bg" style={{ minHeight: '100vh'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="quiz-wrapper p-3 p-lg-5 bg-white rounded-4 shadow-lg">

                {showScore ? (
                  <div className="score-section text-center">
                    <h2 className="mb-4">Quiz Completed!</h2>
                    <div className="score-circle mb-4 d-inline-flex align-items-center justify-content-center rounded-circle"
                         style={{ width: '150px', height: '150px', border: '10px solid #4CAF50', fontSize: '2rem', fontWeight: 'bold' }}>
                      {score} / {questions.length}
                    </div>
                    <p className="fs-5 mb-4">
                      {score === questions.length ? "Perfect Score! You're a React Performance Expert!" :
                       score > questions.length / 2 ? "Great job! You know your stuff." :
                       "Keep learning! React performance is a deep topic."}
                    </p>
                    <button onClick={restartQuiz} className="tp-btn-blue-lg tp-btn-hover">
                      Restart Quiz
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="quiz-header mb-4 d-flex justify-content-between align-items-center">
                      <span className="text-muted">Question {currentQuestion + 1}/{questions.length}</span>
                      <span className="badge bg-light text-dark border">Score: {score}</span>
                    </div>

                    <div className="progress mb-4" style={{ height: '6px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, transition: 'width 0.3s ease' }}
                      ></div>
                    </div>

                    <div ref={questionRef}>
                      <h3 className="question-text mb-4 fs-4 fw-bold text-dark">
                        {questions[currentQuestion].question}
                      </h3>

                      <div className="options-list d-flex flex-column gap-3">
                        {questions[currentQuestion].options.map((option) => {
                          let optionClass = "p-3 rounded-3 border d-flex align-items-center cursor-pointer";
                          let icon = <span className="me-3 fw-bold text-secondary">{option.id}</span>;

                          if (isAnswered) {
                            if (option.isCorrect) {
                              optionClass += " bg-success bg-opacity-10 border-success text-success";
                              icon = <span className="me-3 fw-bold text-success">✓</span>;
                            } else if (selectedOption === option.id) {
                              optionClass += " bg-danger bg-opacity-10 border-danger text-danger";
                              icon = <span className="me-3 fw-bold text-danger">✕</span>;
                            } else {
                              optionClass += " opacity-50";
                            }
                          } else {
                            optionClass += " hover-bg-light";
                          }

                          return (
                            <div
                              key={option.id}
                              className={optionClass}
                              onClick={() => handleOptionClick(option.id, option.isCorrect)}
                              style={{ cursor: isAnswered ? 'default' : 'pointer', transition: 'all 0.2s ease' }}
                            >
                              {icon}
                              <span className="fs-6">{option.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {isAnswered && (
                      <div className="mt-4 text-end">
                        <button
                          onClick={handleNextQuestion}
                          className="tp-btn-blue-lg tp-btn-hover"
                        >
                          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizPage;
