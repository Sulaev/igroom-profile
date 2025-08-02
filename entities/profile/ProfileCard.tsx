import { Profile } from "./types";

type Props = { profile: Profile };

export function ProfileCard({ profile }: Props) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center max-w-sm mx-auto">
      <img
        src={profile.avatar_url}
        alt={profile.name}
        className="w-24 h-24 rounded-full border-2 border-purple-400 mb-2"
      />
      <div className="font-semibold text-lg">{profile.name}</div>
      <div className="text-gray-500 text-sm mb-2">@{profile.nickname}</div>
      <div className="flex gap-2 text-sm text-gray-600 mb-1">
        <span>{profile.city.name}</span>
        <span>·</span>
        <span>{profile.age} лет</span>
      </div>
      <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700 mb-2">{profile.about}</div>
      <div className="flex gap-4 text-xs text-gray-600">
        <span>Баллы: {profile.points}</span>
        <span>Зовы: {profile.calling_limit}</span>
        <span>Иду: {profile.going_limit}</span>
      </div>
      <a
        href={`https://t.me/${profile.telegram}`}
        className="mt-2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
    </div>
  );
}
