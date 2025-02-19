import React from 'react';
import { ArrowLeft, Github, Link } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
    return (
        <div className="min-h-screen bg-white pt-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Navigation */}
                <button
                    onClick={onBack}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    プロジェクト一覧に戻る
                </button>

                {/* Project Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        {project.description}
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href={project.details.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            ソースコードを見る
                        </a>
                        <a
                            href={project.details.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <Link className="w-5 h-5 mr-2" />
                            デモを見る
                        </a>
                    </div>
                </div>

                {/* Project Content */}
                <div className="prose max-w-none">
                    {/* Overview */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">概要</h2>
                        <p className="text-gray-600">
                            {project.details.overview}
                        </p>
                    </section>

                    {/* Tech Stack */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">技術スタック</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">バックエンド</h3>
                                <ul className="space-y-2 text-gray-600">
                                    {project.details.techStack.backend.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">フロントエンド</h3>
                                <ul className="space-y-2 text-gray-600">
                                    {project.details.techStack.frontend.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">インフラ</h3>
                                <ul className="space-y-2 text-gray-600">
                                    {project.details.techStack.infrastructure.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">主な機能</h2>
                        <ul className="space-y-2 text-gray-600">
                            {project.details.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;