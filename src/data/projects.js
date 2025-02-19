export const projects = [
    {
        id: 1,
        title: 'Dropboxライクなファイル共有サービス',
        description: 'AWS無料枠を活用したクラウドストレージシステム',
        technologies: ['Laravel 11.x', 'AWS', 'Docker'],
        details: {
            overview: 'セキュアなファイル共有と効率的なストレージ管理を実現するクラウドサービス。AWS無料枠を最大限に活用し、コスト効率の高いシステムを構築しました。',
            features: [
                '署名付きURLによる安全なファイル共有',
                '期限付きアクセス管理',
                'IAMポリシーの最小権限設定',
                '大容量ファイル対応',
                '効率的なストレージ管理',
                'キャッシュ戦略の実装'
            ],
            techStack: {
                backend: ['Laravel 11.x', 'PHP 8.2', 'MySQL 8.0'],
                frontend: ['Blade Templates', 'Tailwind CSS', 'Alpine.js'],
                infrastructure: ['AWS S3', 'AWS Lambda', 'Docker', 'AWS API Gateway']
            },
            github: 'https://github.com/yourusername/project',
            demo: 'https://demo-url.com'
        }
    },
    // 他のプロジェクトをここに追加
];