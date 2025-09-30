import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
            {/* Navigation */}
            <nav className="border-b border-blue-800/30 bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/CelesSoft.png"
                                alt="CelesSoft Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <h1 className="text-2xl font-bold text-white">
                                Celes<span className="text-slate-400">Soft</span>
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#features" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    기능
                                </a>
                                <a href="#about" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    소개
                                </a>
                                <a href="#contact" className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    문의
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                {/* 우주 배경 효과 */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <Badge variant="secondary" className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                            📱 일상생활을 편리하게 만드는 앱 서비스
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            사용자 중심의
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                모바일 앱 서비스
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            CelesSoft는 사용자의 일상생활을 더욱 편리하고 효율적으로 만들어주는
                            직관적이고 사용하기 쉬운 모바일 앱 서비스를 제공합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-slate-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            앱 서비스의 핵심 기능
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            일상생활을 더욱 편리하게 만들어주는 직관적이고 사용하기 쉬운 앱 서비스 기능들
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <CardTitle className="text-white">빠른 서비스</CardTitle>
                                <CardDescription className="text-slate-300">
                                    사용자가 기다리지 않도록 최적화된 서비스로 빠르고 효율적인 앱 경험을 제공합니다.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <CardTitle className="text-white">안전한 서비스</CardTitle>
                                <CardDescription className="text-slate-300">
                                    사용자의 개인정보와 데이터를 안전하게 보호하는 강력한 보안 서비스를 제공합니다.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <CardTitle className="text-white">직관적 서비스</CardTitle>
                                <CardDescription className="text-slate-300">
                                    사용자가 쉽게 이해하고 사용할 수 있는 직관적인 서비스로 일상생활을 편리하게 만듭니다.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🔄</span>
                                </div>
                                <CardTitle className="text-white">실시간 서비스</CardTitle>
                                <CardDescription className="text-slate-300">
                                    여러 디바이스 간 실시간 데이터 동기화로 언제 어디서나 일관된 서비스 경험을 제공합니다.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <CardTitle className="text-white">맞춤형 서비스</CardTitle>
                                <CardDescription className="text-slate-300">
                                    사용자의 개인적인 요구사항과 사용 패턴에 맞는 맞춤형 서비스를 제공합니다.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <CardTitle className="text-white">지속적 서비스</CardTitle>
                                <CardDescription className="text-slate-300">
                                    사용자 피드백을 반영한 지속적인 서비스 개선과 24/7 고객 지원으로 완벽한 앱 서비스를 제공합니다.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                CelesSoft 서비스팀
                            </h2>
                            <p className="text-lg text-slate-300 mb-6">
                                CelesSoft는 사용자 중심의 혁신적인 모바일 앱 서비스 회사로, 최신 기술과 창의적인 아이디어를
                                결합하여 사용자의 일상생활을 더욱 편리하게 만드는 앱 서비스를 제공합니다.
                            </p>
                            <p className="text-lg text-slate-300 mb-8">
                                우리는 모바일 앱 서비스, 웹 서비스, 클라우드 서비스 등 다양한 분야에서
                                사용자 편의성을 최우선으로 하는 최고의 서비스를 제공합니다.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                                    <span className="text-slate-300">10년 이상의 앱 서비스 경험</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse delay-1000"></span>
                                    <span className="text-slate-300">100+ 성공적인 앱 서비스</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse delay-2000"></span>
                                    <span className="text-slate-300">24/7 고객 지원</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">📱</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    앱 서비스 전문성
                                </h3>
                                <p className="text-slate-300">
                                    최신 모바일 기술과 사용자 경험을 바탕으로 한
                                    사용자 친화적인 앱 서비스 제공
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            앱 서비스 문의
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            앱 서비스에 대한 문의사항이나 궁금한 점이 있으시면 언제든 연락주세요. 빠른 시일 내에 답변드리겠습니다.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <CardTitle className="text-white">앱 서비스 문의</CardTitle>
                                <CardDescription className="text-slate-300">
                                    앱 서비스에 대한 자세한 내용을 알려주시면 빠른 시일 내에 연락드리겠습니다.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            이름
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-700 text-white"
                                            placeholder="홍길동"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            이메일
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-700 text-white"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        앱 서비스 요구사항
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-700 text-white"
                                        placeholder="앱 서비스에 대해 자세히 설명해주세요..."
                                    />
                                </div>
                                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                                    📱 앱 서비스 문의 보내기
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <Image
                                    src="/CelesSoft.png"
                                    alt="CelesSoft Logo"
                                    width={32}
                                    height={32}
                                    className="rounded-lg"
                                />
                                <h3 className="text-2xl font-bold">
                                    Celes<span className="text-slate-400">Soft</span>
                                </h3>
                            </div>
                            <p className="text-slate-400">
                                사용자 중심의 혁신적인 모바일 앱 서비스로 일상생활을 더욱 편리하게 만들어갑니다.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-cyan-300">앱 서비스</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">일상생활 앱</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">생산성 앱</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">엔터테인먼트 앱</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">앱 서비스 문의</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-cyan-300">회사 정보</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">회사 소개</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">서비스팀</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">채용 정보</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">뉴스</a></li>
                                <li><a href="/privacy" className="hover:text-cyan-400 transition-colors">개인정보처리방침</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-cyan-300">연락처</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>📧 celessoft.team@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <Separator className="my-8 bg-slate-700" />
                    <div className="text-center text-slate-400">
                        <p>&copy; 2025 CelesSoft. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
