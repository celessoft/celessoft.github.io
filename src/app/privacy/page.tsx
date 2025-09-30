import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
            {/* Navigation */}
            <nav className="border-b border-blue-800/30 bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-3">
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
                        </Link>
                        <Link href="/">
                            <Button variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
                                홈으로 돌아가기
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        개인정보처리방침
                    </h1>
                    <p className="text-xl text-slate-300">
                        CelesSoft는 사용자의 개인정보 보호를 최우선으로 합니다.
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                        최종 수정일: 2025년 10월 1일
                    </p>
                </div>

                <div className="space-y-8">
                    {/* 1. 개인정보 수집 및 이용 목적 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">1. 개인정보 수집 및 이용 목적</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>CelesSoft는 현재 개인정보를 수집하지 않으므로, 개인정보 처리 목적이 없습니다.</p>
                        </CardContent>
                    </Card>

                    {/* 2. 수집하는 개인정보 항목 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">2. 수집하는 개인정보 항목</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>CelesSoft는 현재 개인정보를 수집하지 않습니다.</p>
                        </CardContent>
                    </Card>

                    {/* 3. 개인정보 처리 및 보유 기간 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">3. 개인정보 처리 및 보유 기간</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>CelesSoft는 개인정보를 수집하지 않으므로, 개인정보 처리 및 보유 기간이 적용되지 않습니다.</p>
                        </CardContent>
                    </Card>

                    {/* 4. 개인정보 제3자 제공 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">4. 개인정보 제3자 제공</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>CelesSoft는 개인정보를 수집하지 않으므로, 제3자에게 개인정보를 제공할 일이 없습니다.</p>
                        </CardContent>
                    </Card>

                    {/* 5. 개인정보 처리 위탁 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">5. 개인정보 처리 위탁</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>CelesSoft는 개인정보를 수집하지 않으므로, 개인정보 처리 위탁이 없습니다.</p>
                        </CardContent>
                    </Card>

                    {/* 6. 개인정보의 안전성 확보 조치 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">6. 개인정보의 안전성 확보 조치</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>CelesSoft는 개인정보를 수집하지 않으므로, 개인정보 안전성 확보 조치가 적용되지 않습니다.</p>
                        </CardContent>
                    </Card>

                    {/* 7. 개인정보 보호책임자 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">7. 개인정보 보호책임자</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:</p>
                            <div className="bg-slate-700/50 p-4 rounded-lg">
                                <p><strong>개인정보 보호책임자</strong></p>
                                <p>연락처: celessoft.team@gmail.com</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 8. 개인정보 처리방침 변경 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">8. 개인정보 처리방침 변경</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
                        </CardContent>
                    </Card>

                    {/* 9. 권익침해 구제방법 */}
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl">9. 권익침해 구제방법</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300 space-y-4">
                            <p>개인정보주체는 개인정보침해신고센터, 개인정보 분쟁조정위원회, 정보보호마크인증위원회 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>개인정보침해신고센터:</strong> privacy.go.kr (국번없이 182)</li>
                                <li><strong>개인정보 분쟁조정위원회:</strong> www.kopico.go.kr (국번없이 1833-6972)</li>
                                <li><strong>대검찰청 사이버범죄수사단:</strong> www.spo.go.kr (02-3480-3571)</li>
                                <li><strong>경찰청 사이버안전국:</strong> cyberbureau.police.go.kr (국번없이 182)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Section */}
                <div className="mt-12 text-center">
                    <Card className="bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-white">문의사항이 있으시면 언제든 연락주세요</CardTitle>
                        </CardHeader>
                        <CardContent className="text-slate-300">
                            <p>개인정보 처리방침에 대한 문의사항이나 개인정보 관련 불만이 있으시면 아래로 연락주시기 바랍니다.</p>
                            <div className="mt-4 space-y-2">
                                <p>📧 이메일: celessoft.team@gmail.com</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Image
                                src="/CelesSoft.png"
                                alt="CelesSoft Logo"
                                width={24}
                                height={24}
                                className="rounded-lg"
                            />
                            <h3 className="text-xl font-bold">
                                Celes<span className="text-slate-400">Soft</span>
                            </h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            &copy; 2025 CelesSoft. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
