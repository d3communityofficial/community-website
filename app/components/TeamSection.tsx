import { Cpu } from 'lucide-react';
import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'FOUNDER',
      seed: 'Alex',
      bgColor: 'b6e3f4',
      roleColor: 'text-dark-primary',
      borderHover: 'group-hover:border-dark-primary',
    },
    {
      name: 'Maya Patel',
      role: 'CORE_TEAM',
      seed: 'Maya',
      bgColor: 'ffdfbf',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Jordan Lee',
      role: 'CORE_TEAM',
      seed: 'Jordan',
      bgColor: 'c0aede',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Taylor Kim',
      role: 'CORE_TEAM',
      seed: 'Taylor',
      bgColor: 'd4f4dd',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Sam Rodriguez',
      role: 'CORE_TEAM',
      seed: 'Sam',
      bgColor: 'ffd5e5',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Casey Wong',
      role: 'CORE_TEAM',
      seed: 'Casey',
      bgColor: 'fff5ba',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Riley Brooks',
      role: 'CORE_TEAM',
      seed: 'Riley',
      bgColor: 'e5d4f4',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
    {
      name: 'Morgan Davis',
      role: 'CORE_TEAM',
      seed: 'Morgan',
      bgColor: 'd4e5f4',
      roleColor: 'text-dark-muted',
      borderHover: 'group-hover:border-dark-secondary',
    },
  ];

  return (
    <div className='md:col-span-3 lg:col-span-1'>
      <h2 className='text-2xl font-bold flex items-center gap-2 mb-6'>
        <Cpu className='w-6 h-6 text-dark-primary' />
        Core Units
      </h2>

      <div className='bg-dark-card border border-dark-border rounded-3xl p-6'>
        <div className='space-y-6'>
          {teamMembers.map((member) => (
            <div key={member.name} className='flex items-center gap-4 group'>
              <div
                className={`w-12 h-12 rounded-xl bg-gray-800 overflow-hidden border border-dark-border ${member.borderHover} transition-colors`}
              >
                <Image
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.seed}&backgroundColor=${member.bgColor}`}
                  alt={member.name}
                  width={48}
                  height={48}
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <h4 className='font-bold text-sm text-white'>{member.name}</h4>
                <span className={`text-xs ${member.roleColor} font-mono`}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
