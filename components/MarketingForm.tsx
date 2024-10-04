"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  {
    id: "business_description",
    question: "Please describe your business.",
    type: "textarea",
  },
  {
    id: "business_keywords",
    question:
      "What are five key words you would use to describe your business?",
    type: "input",
  },
  {
    id: "unique_selling_point",
    question:
      "What do you offer to your customers that makes them choose you over your main competitors?",
    type: "textarea",
  },
  {
    id: "business_weaknesses",
    question:
      "What do you feel the weaknesses in your business or business model are?",
    type: "textarea",
  },
  {
    id: "business_obstacles",
    question:
      "What obstacles do you feel are standing in the way of your success at the moment?",
    type: "textarea",
  },
  {
    id: "customer_profile",
    question: "Please provide a detailed profile of your customer.",
    type: "textarea",
  },
  {
    id: "customer_job",
    question: "What does your customer do for a living?",
    type: "input",
  },
  {
    id: "customer_education",
    question: "What level of education has your customer completed?",
    type: "input",
  },
  {
    id: "customer_income",
    question: "What is s your customers approximate income?",
    type: "input",
  },
  {
    id: "customer_location",
    question: "Where is your customer located?",
    type: "input",
  },
  {
    id: "customer_questions",
    question: "What question(s) are you constantly being asked by customers?",
    type: "textarea",
  },
  {
    id: "ideal_customer_knowledge",
    question: "What does your ideal customer need to know about you?",
    type: "textarea",
  },
  {
    id: "customer_pain_points",
    question:
      "When customers are describing the pain points that lead them to using your product, what is their mood?",
    type: "textarea",
  },
  {
    id: "customer_engagement",
    question: "What do you feel is the best way to engage your customer?",
    type: "textarea",
  },
  {
    id: "social_media_platforms",
    question:
      "Which social media platforms do you think your customer might use?",
    type: "input",
  },
  {
    id: "competitors",
    question:
      "Please provide us with links to at least three direct competitors.",
    type: "textarea",
  },
  {
    id: "customer_acquisition",
    question:
      "At the moment, where are the majority of your customers finding your business?",
    type: "textarea",
  },
  {
    id: "project_expectations",
    question: "Let us know of your aims and expectations for this project.",
    type: "textarea",
  },
];

export default function MarketingQuestionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setDirection(1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleSubmit = () => {
    console.log("Questionnaire answers:", answers);
    alert("Thank you for completing the questionnaire!");
  };

  return (
    <div className="text-white flex items-center justify-center ">
      <motion.div
        className="w-full max-w-2xl  p-8 border-2 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">
          Marketing Client Questionnaire
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            custom={direction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 ">
              <p className="text-lg mb-4 ">{currentQuestion.question}</p>
              {currentQuestion.type === "input" ? (
                <Input
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleAnswer(e.target.value)}
                />
              ) : (
                <Textarea
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) => handleAnswer(e.target.value)}
                  rows={4}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handlePrevious}
              size="lg"
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {currentQuestionIndex === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="border-green-400 text-green-400"
              >
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext} size="lg">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </div>
        <motion.div
          className="mt-4 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Question {currentQuestionIndex + 1} of {questions.length}
        </motion.div>
      </motion.div>
    </div>
  );
}
