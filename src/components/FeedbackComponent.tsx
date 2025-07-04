"use client";

import { useState } from "react";
import { FaLightbulb, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { type ComponentPropsWithoutRef, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';


interface FeedbackContent {
    pages: string[];
}

interface FeedbackComponentProps {
    isCorrect: boolean;
    feedbackContent: FeedbackContent;
    initialPage?: number; // Optional prop to set which page to start on
    className?: string; // Optional additional CSS classes
}

const FeedbackComponent: React.FC<FeedbackComponentProps> = ({
    isCorrect,
    feedbackContent,
    initialPage = 1,
    className = ""
}) => {
    const [feedbackPage, setFeedbackPage] = useState(initialPage);

    // Navigation for feedback pages
    const nextFeedbackPage = () => {
        if (feedbackPage < feedbackContent.pages.length) {
            setFeedbackPage(feedbackPage + 1);
        }
    };

    const prevFeedbackPage = () => {
        if (feedbackPage > 1) {
            setFeedbackPage(feedbackPage - 1);
        }
    };

    const markdownComponents = {
        pre: (props: ComponentPropsWithoutRef<'pre'>) => (
            <pre
                className="max-w-full bg-gray-50 rounded-md p-3 my-4 overflow-hidden"
                style={{
                    whiteSpace: 'pre-wrap',
                    overflowWrap: 'anywhere'
                }}
                {...props}
            />
        ),
        code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => {
            const isInline = !className?.includes('language-');
            return (
                <code
                    className={isInline
                        ? "bg-gray-100 px-1 py-0.5 rounded text-sm font-mono"
                        : "font-mono text-sm"
                    }
                    style={!isInline ? {
                        whiteSpace: 'pre-wrap',
                        overflowWrap: 'anywhere',
                        display: 'block',
                        maxWidth: '100%'
                    } : undefined}
                    {...props}
                />
            );
        },
        // Regular paragraphs should use normal word breaking
        p: (props: ComponentPropsWithoutRef<'p'>) => (
            <p
                className="max-w-full"
                style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                }}
                {...props}
            />
        ),
        // Add styling for links with target="_blank"
        a: (props: ComponentPropsWithoutRef<'a'>) => (
            <a
                className="text-blue-600 hover:text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            />
        )
    };

    // Helper function to only break long hex strings
    const formatLongHexStrings = (content: string) => {
        return content.replace(
            /(0x[a-f0-9]{60,})/gi,
            (match) => {
                // Break long hex strings into chunks of ~60 chars
                let result = '';
                for (let i = 0; i < match.length; i += 60) {
                    result += match.substring(i, i + 60) + '\n';
                }
                return result.trim();
            }
        );
    };


    return (
        <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
            <div className="flex items-start">
                <FaLightbulb className="text-yellow-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                        That's {isCorrect ? "correct" : "incorrect"}. Let's see why:
                    </h3>

                    <div className="mt-2 text-gray-700">
                        <div>
                            <ReactMarkdown components={markdownComponents}>
                                {feedbackContent.pages[feedbackPage - 1]}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>

            {/* Only show pagination if there are multiple pages */}
            {feedbackContent.pages.length > 1 && (
                <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                        Page {feedbackPage} of {feedbackContent.pages.length}
                    </span>

                    <div className="flex space-x-2">
                        {feedbackPage > 1 && (
                            <button
                                onClick={prevFeedbackPage}
                                className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                                <FaChevronLeft />
                            </button>
                        )}

                        {feedbackPage < feedbackContent.pages.length && (
                            <button
                                onClick={nextFeedbackPage}
                                className="px-3 py-1 bg-blue-600 rounded-md text-sm text-white hover:bg-blue-700 cursor-pointer"
                            >
                                <FaChevronRight />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackComponent;