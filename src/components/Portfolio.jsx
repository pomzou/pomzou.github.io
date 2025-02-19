import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ProjectDetail from './ProjectDetail';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const navigation = [
        { name: 'ホーム', id: 'home' },
        { name: '自己紹介', id: 'about' },
        { name: 'スキル', id: 'skills' },
        { name: 'プロジェクト', id: 'projects' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            const sections = navigation.map(nav => nav.id);
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (selectedProject) {
        return (
            <ProjectDetail
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Fixed Navigation */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
                }`}>
                <nav className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center px-6 h-16">
                        <span className="text-xl font-semibold text-gray-900">Portfolio</span>
                        <div className="flex space-x-8">
                            {navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors relative
                    ${activeSection === item.id
                                            ? 'text-blue-600'
                                            : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    {item.name}
                                    {activeSection === item.id && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-16">
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center">
                    <div className="text-center space-y-6 px-4">
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
                            あなたの名前
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            スケーラブルでセキュアなアプリケーション開発に特化したWebエンジニア
                        </p>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="animate-bounce inline-flex items-center justify-center mt-8"
                            aria-label="自己紹介セクションへスクロール"
                        >
                            <ChevronDown size={32} className="text-gray-400" />
                        </button>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="min-h-screen flex items-center py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">自己紹介</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900">経歴</h3>
                                <p className="text-gray-600">
                                    IT専門学校を卒業後、ネットワーク構築・検証の業務に携わりました。
                                    現在は、Webアプリケーション開発に注力しています。
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900">学歴・職歴</h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-gray-200 pl-4">
                                        <h4 className="font-medium text-gray-900">IT専門学校</h4>
                                        <p className="text-gray-600">20歳で卒業</p>
                                    </div>
                                    <div className="border-l-2 border-gray-200 pl-4">
                                        <h4 className="font-medium text-gray-900">ネットワークインフラ検証</h4>
                                        <p className="text-gray-600">6ヶ月の実務経験</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="min-h-screen flex items-center py-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">スキル</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">バックエンド</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Laravel 11.x</li>
                                    <li>PHP 8.2</li>
                                    <li>MySQL 8.0</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="text-xl font-semibold text-text-gray-900 mb-4">フロントエンド</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Tailwind CSS</li>
                                    <li>Alpine.js</li>
                                    <li>Blade Templates</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">インフラ</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>AWS (S3, Lambda, API Gateway)</li>
                                    <li>Docker</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="min-h-screen flex items-center py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">プロジェクト</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {projects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Portfolio;