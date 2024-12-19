import React from 'react';
import { UserCircle2, Briefcase, GraduationCap, RefreshCcw } from 'lucide-react';

const audiences = [
  {
    icon: UserCircle2,
    title: 'Начинающим',
    description: 'Тем, кто хочет войти в IT с нуля и получить востребованную профессию'
  },
  {
    icon: Briefcase,
    title: 'Специалистам',
    description: 'Менеджерам и специалистам, желающим развить навыки бизнес-анализа'
  },
  {
    icon: GraduationCap,
    title: 'Студентам',
    description: 'Учащимся, которые хотят получить практические навыки параллельно с учебой'
  },
  {
    icon: RefreshCcw,
    title: 'Меняющим профессию',
    description: 'Тем, кто ищет новые карьерные возможности в перспективной сфере'
  }
];

export default function Audience() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Кому подходит обучение
          </h2>
          <p className="text-xl text-gray-400">
            Наша программа разработана с учетом потребностей разных категорий учащихся
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 h-full transform hover:-translate-y-1 transition-all">
                <div className="bg-gradient-to-br from-red-500/20 to-purple-500/20 p-3 rounded-lg w-fit mb-6">
                  <item.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}